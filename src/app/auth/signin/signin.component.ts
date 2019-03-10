import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.srvice';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log("Sign in:" + email + ";" + password);
    this.authService.signinUser(email, password);
  }

}
