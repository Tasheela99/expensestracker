import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {map, Observable, take} from "rxjs";

import {AngularFireAuth} from "@angular/fire/compat/auth";
import {user} from "@angular/fire/auth";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService:AuthService) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean{
    if (this.authService.isTokenExists('auth-token')){
      return true;
    }else {
      this.router.navigateByUrl('/security/login');
      return false;
    }
  }

}
