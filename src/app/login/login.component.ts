import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../service/apiService/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice: ApiService ,
    private router :Router, private authservice:AuthService,
    private http : HttpClient) {
   
   }
  login: any = {
   
    username: 'harini@123',
    password:'harini111'
  }
 
 
  ngOnInit(): void {
   this.user
    
  }
  user() {  
    this.apiservice.add('http://192.168.0.156/boilerplate/api/web/v1/libmag/loginmethod', this.login)
      .subscribe((res: any) => {
        console.log(res)
     
     localStorage.setItem("user_name", res.data.data.username)
     localStorage.setItem("access_token", res.data.data.token)
     localStorage.setItem("role",res.data.data.role_id)
     localStorage.setItem("Name",res.data.data.name)
     

    
    let role: any=localStorage.getItem("role")
  //  this.authservice.isLoggedIn(res.data.data.token).then(()=>{

  //  })
  this.authservice.isLoggedIn(token).then((res)=>{
    console.log(res)
    if(role==0){
      this.router.navigate(['/admin'])
    }else{
      this.router.navigate(['/user'])
    }
    //this.router.navigate(['/admin'])
    
  });
  
      });
     
      localStorage.setItem('login',this.login)
      

    

  }

 


}


function token(token: any) {
  throw new Error('Function not implemented.');
}

