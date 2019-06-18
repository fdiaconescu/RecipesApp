import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import { Store } from '@ngrx/store';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService,
                private store: Store<fromShoppingList.AppState>)
         {}

    private recipes: Recipe[] = [new Recipe("Test", "Just a test recipe", 
                "https://images.media-allrecipes.com/userphotos/300x300/800839.jpg",
            [new Ingredient('bread', 1), new Ingredient('water', 3)]),
                                 new Recipe("Another Test", "Just a test recipe", 
                                 "https://images.media-allrecipes.com/userphotos/300x300/800839.jpg",
                                [new Ingredient('pear', 2), new Ingredient('flour', 5)])
                                ];

    getRecipes() {
        return this.recipes.slice();
    } 

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}