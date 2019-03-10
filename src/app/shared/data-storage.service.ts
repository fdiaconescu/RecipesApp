import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.srvice';

@Injectable()
export class DataStorageService {

    constructor(private http:Http, 
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-2bf11.firebaseio.com/recipes.json', 
                        this.recipeService.getRecipes());
    }

    getRecipes(){
        const token = this.authService.getToken();
        console.log("Token:" + token);

        this.http.get('https://ng-recipe-book-2bf11.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
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