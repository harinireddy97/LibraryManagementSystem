import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false
  constructor(private router: Router) { }

  async isLoggedIn(token) {
   await localStorage.getItem("access_token")
    this.isAuthenticated = true;

    return true;
  }
  logOut(){
    localStorage.removeItem('access_token')
    localStorage.clear()
  
    this.router.navigate(['/home'])
  }
}

