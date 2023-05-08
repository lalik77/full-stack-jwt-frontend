import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from "../_services/user-auth.service";
import {tick} from "@angular/core/testing";
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userAuthService:UserAuthService,
    private router :Router,
    private userService:UserService
    ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userAuthService.getToken() !== null) {
      const role = route.data["roles"] as Array<string>;

      if(role) {
        const isMatch = this.userService.roleMatch(role);

        if(isMatch) {
          return true;
        }else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }

    }
    this.router.navigate(['/login'])
    return false;
  }
}
