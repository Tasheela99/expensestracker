import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router, private snackbar: MatSnackBar, private cookieService: CookieService) {
  }

  public createToken(data: string) {
    this.cookieService.set('auth-token', data);
  }

  public isTokenExists(key: string): boolean {
    return this.cookieService.check(key);
  }

  public getToken(key: string): string {
    if (this.isTokenExists(key)) {
      return this.cookieService.get(key)
    } else {
      return '';
    }
  }

  public removeToken(key:string){
    if (this.isTokenExists(key)){
      this.cookieService.delete(key);
    }
  }
  signOut() {
    this.auth.signOut().then(() => {
      this.removeToken('auth-token');
      this.router.navigateByUrl('/security/login')
    }, error => {
      this.snackbar.open("Error");
    })
  }
}
