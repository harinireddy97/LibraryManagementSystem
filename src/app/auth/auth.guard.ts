import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    console.log('CanActivate called');

let userData=this.authservice.isLoggedIn(localStorage.getItem("access_token"))

  if (!userData) {
    this.router.navigate(['/login']);
    return false;
}
return true;
}
}