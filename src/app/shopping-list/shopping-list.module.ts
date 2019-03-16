import { NgModule } from '@angular/core';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [
        ShopingEditComponent,
        ShoppingListComponent
    ],

    imports: [
        CommonModule,
        FormsModule
    ]
})

export class ShoppingListModule {

}