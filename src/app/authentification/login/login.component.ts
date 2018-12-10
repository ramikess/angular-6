import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././service/authService';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';

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

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.authService.getToken(username,password).subscribe(
        res => {
          if (res['token']) {
            this.setSession(res['token']);
            this.router.navigateByUrl('/');
          }
        }
    );
  }

  private setSession(token) {
    localStorage.setItem('token', token);
  }
}
