import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private auth:AngularFireAuth, private router:Router, private snackBar:MatSnackBar, private authService:AuthService) {}


  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    if (this.authService.isTokenExists('auth-token')){
      this.router.navigateByUrl('/dashboard').then(r => {
      });
    }
  }


  async login() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    if (email != null && password != null) {
      this.authService.createToken(email);
      await this.auth.signInWithEmailAndPassword(email,password)
          .then(response=>{
            this.snackBar.open('Login SuccessFully')._dismissAfter(5000);
            this.router.navigateByUrl('/dashboard');
          });
    }
  }


}
