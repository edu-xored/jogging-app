import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router/src/router';

/***
 * Protect routes from unauthenticated users.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this._userService.authenticated) {
        console.log('Access denied: user not logged in.');
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
  }
}
