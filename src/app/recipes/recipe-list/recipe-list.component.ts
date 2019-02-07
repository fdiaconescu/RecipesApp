import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe("Test", "Just a test recipe", "https://images.media-allrecipes.com/userphotos/300x300/800839.jpg"),
  new Recipe("Test", "Just a test recipe", "https://images.media-allrecipes.com/userphotos/300x300/800839.jpg")];

  constructor() { }

  ngOnInit() {
  }

}
