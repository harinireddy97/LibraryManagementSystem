import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
Name=''
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.Name= localStorage.getItem('Name')
  }
  logOut(){
    this.authService.logOut()
    this.router.navigate(['/home'])
    }
}
