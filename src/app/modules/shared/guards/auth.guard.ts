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
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.pipe(
        take(1),
        map(user => {
          if (user) {
            return true;
          } else {
            return this.router.createUrlTree(['/security/login']);
          }
        })
    );
  }
}
