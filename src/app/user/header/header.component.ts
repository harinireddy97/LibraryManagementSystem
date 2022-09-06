import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
Name=''
  access_token: string;
  current_user: string;
  // payload:any={
  //   new_name:"",
  //   new_phno:"",
  //   new_email:"",
  //   new_dob:" "
  // }
  updateForm:FormGroup
  constructor(private authService:AuthService,private router:Router,private apiservice:ApiService,config: NgbDropdownConfig,private formbuilder:FormBuilder) { 
  
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-start';
    config.autoClose = false;
  }
  
  ngOnInit(): void {
    this.current_user = localStorage.getItem("user_name")
  this.access_token = localStorage.getItem("access_token")
    this.Name= localStorage.getItem('Name')
    this.updateForm = this.formbuilder.group({
    new_name:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
    new_phno:['',Validators.required],
    new_email:['',[Validators.required]],
    new_dob:['',Validators.required]
    })

  }
  logOut(){
    // this.authService.logOut()
    // this.router.navigate(['/home'])
    // }
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get('http://192.168.1.123/boilerplate/api/web/v1/libmag/signout?username='+this.current_user, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      res.data;
   
  });
  this.router.navigate(['/home'])
  }
  update(updateForm){
   
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.post(`http:///192.168.1.123/boilerplate/api/web/v1/libmag/updateuser?username=${this.current_user}`, updateForm,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      updateForm = res.data;
       
   console.log(this.updateForm)

  });
  alert('updated')
}

}