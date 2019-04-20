import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.srvice';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes(){
        return this.httpClient.put('https://ng-recipe-book-2bf11.firebaseio.com/recipes.json', 
                        this.recipeService.getRecipes(), {
                            observe: 'body'
                        });
    }

    getRecipes(){
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-2bf11.firebaseio.com/recipes.json')
            .map(
                (recipes) => {
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
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
            );
    }

}