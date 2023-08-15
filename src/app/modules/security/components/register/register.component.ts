import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    constructor(private auth:AngularFireAuth, private router:Router) {
    }

    registerForm = new FormGroup({
        email: new FormControl('',[Validators.email, Validators.required]),
        password: new FormControl('',[Validators.required]),
    });

    register() {
        let email = this.registerForm.get('email')?.value;
        let password = this.registerForm.get('password')?.value;

        this.auth.createUserWithEmailAndPassword(email!,password!).then(response=>{
            this.router.navigateByUrl('/security/login');
        })
    }
}
