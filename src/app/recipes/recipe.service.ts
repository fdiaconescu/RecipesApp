import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) {}

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

    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}