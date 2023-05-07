import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {  

  constructor(private userService :UserService){

  }

  login(loginForm:NgForm) {
    // console.log("Form is submitted")
    // console.log(loginForm.value)
    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
