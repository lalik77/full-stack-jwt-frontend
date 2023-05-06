import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {  

  login(loginForm:NgForm) {
    console.log("Form is submitted")
    console.log(loginForm.value)
  }

}
