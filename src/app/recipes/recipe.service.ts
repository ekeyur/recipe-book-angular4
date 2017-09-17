import { OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService implements OnInit{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'http://del.h-cdn.co/assets/16/51/1600x800/landscape-1482353639-delish-linguine-with-clams-07.jpg'
        ),
        new Recipe(
          'A Test Recipe2',
          'This is simply a test2',
          'http://del.h-cdn.co/assets/16/51/1600x800/landscape-1482353639-delish-linguine-with-clams-07.jpg'
        )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
    ngOnInit () {

    }
}