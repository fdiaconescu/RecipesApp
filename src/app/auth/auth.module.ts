import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],

    imports:[
        FormsModule,
        AuthRouterModule
    ]
})
export class AuthModule {

}