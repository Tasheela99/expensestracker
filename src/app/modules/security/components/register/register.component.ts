import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import Users from "../../../dashboard/dto/Users";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AngularFireAuth, private router: Router,private userService: UserService) {
  }

  registerForm = new FormGroup({
    userEmail: new FormControl('', [Validators.email, Validators.required]),
    userName: new FormControl('', [Validators.required]),
    userAddress: new FormControl('', [Validators.required]),
    userPhone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  register() {
    let email = this.registerForm.get('userEmail')?.value;
    let password = this.registerForm.get('password')?.value;

    this.auth.createUserWithEmailAndPassword(email!, password!).then(response => {
      this.createUser();
      this.router.navigateByUrl('/security/login');
    })
  }

  createUser() {
    let user = new Users(
      this.registerForm.get('userEmail')?.value!,
      this.registerForm.get('userName')?.value!,
      this.registerForm.get('userPhone')?.value!,
      this.registerForm.get('userAddress')?.value!
    );
    const userData = user.toPlainObject();

    this.userService.createData(userData).then(() => {
      console.log("Saved!");
    });
  }
}
