import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { OnInit, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService implements OnInit{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'http://del.h-cdn.co/assets/16/51/1600x800/landscape-1482353639-delish-linguine-with-clams-07.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries',20)
          ]
        ),
        new Recipe(
          'Big Fat Burger',
          'Does it need any more explanation?',
          'http://www.freepngimg.com/download/burger/6-2-burger-png-image.png',
          [
            new Ingredient('Meat', 1),
            new Ingredient('Buns',2)
          ]
        )
      ];
    
    constructor(private slService: ShoppingListService){}  

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

    ngOnInit () {
      // Put something to load on initialization
    }
}