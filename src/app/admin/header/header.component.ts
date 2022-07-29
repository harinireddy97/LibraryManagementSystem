import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private apiservice:ApiService) { }
Name=''

  ngOnInit(): void {
  this.Name= localStorage.getItem('Name')
  
  }
  logOut(){
this.authService.logOut()
this.router.navigate(['/home'])
}
}
