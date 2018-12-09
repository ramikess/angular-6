import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././service/authService';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onFormSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.authService.getToken(username,password).subscribe(
        token => console.log(token)
    );
  }
}
