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
  access_token: string;
  current_user: string;

  constructor(private authService:AuthService,private router:Router,private apiservice:ApiService) { }
Name=''

  ngOnInit(): void {
  this.Name= localStorage.getItem('Name')
  
  }
  logOut(){
// this.authService.logOut()
// this.router.navigate(['/home'])
let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get('http://192.168.1.123/boilerplate/api/web/v1/libmag/signout?username='+this.current_user, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      res.data;
   
  });
  this.router.navigate(['/home'])
  }
}

