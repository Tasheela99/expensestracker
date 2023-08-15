import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private auth: AngularFireAuth, private router: Router, private snackbar: MatSnackBar) {
    }

    login(email: any, password: any) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                localStorage.setItem('token', 'true');
                this.router.navigateByUrl('/dashboard').then(r => {
                    this.snackbar.open('SuccessFull');
                })
            }, error => {
                this.snackbar.open("SomeThing Went Wrong");
                this.router.navigateByUrl('/login').then(r => {
                    console.error("Error");
                })
            })
    }


    register(email:string, password:any){
        this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
            this.snackbar.open('Account Created Successfull');
            this.router.navigateByUrl('/login');
        },error=>{
            this.snackbar.open('Account Created Unsuccessfull');
            this.router.navigateByUrl('/register');
        })
    }

    signOut(){
        this.auth.signOut().then(()=>{
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login')
        }, error=>{
            this.snackbar.open("Error");
        })
    }
}
