import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  
  constructor(private shoppingListService: ShoppingListService, 
    private store: Store<fromShoppingList.AppState> 
   ){ }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onIngredientAdded(ingredient: Ingredient){
    //this.shoppingListService.addIngredient(ingredient);
    this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
