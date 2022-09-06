import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../service/apiService/api.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(private apiservice: ApiService ,
    private router :Router, private authservice:AuthService,
     private formbuilder:FormBuilder) { }
 

 
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username :['harini@123',[Validators.required]],
      password:['harini111',Validators.required]
    })
   this.user
    
  }
  user(logindata) { 
    console.log(this.loginForm)
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
     
  //  let  login= {
  //     username:this.loginForm.value.username,
  //     password:this.loginForm.value.password
  //   }
    this.apiservice.add('http://192.168.1.123/boilerplate/api/web/v1/libmag/loginmethod', logindata)
      .subscribe((res: any) => {
        console.log(res)
     
     localStorage.setItem("user_name", res.data.data.username)
     localStorage.setItem("access_token", res.data.data.token)
     localStorage.setItem("role",res.data.data.role_id)
     localStorage.setItem("Name",res.data.data.name)
     localStorage.setItem('user_id',res.data.data.user_id)

     

    
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
     
       
    }
    

  }

 


}


function token(token: any) {
  throw new Error('Function not implemented.');
}

