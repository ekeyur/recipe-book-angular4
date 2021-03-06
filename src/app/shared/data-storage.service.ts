import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService){}
    
    storeRecipes() {
        const token = this.authService.getToken();   
        return this.http.put('https://udemy-ng-http-9460e.firebaseio.com/recipes.json?auth='+token,
                        this.recipeService.getRecipes());         
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.authService.getToken();
        this.http.get('https://udemy-ng-http-9460e.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for(let recipe of recipes) {
                        if(!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }
}