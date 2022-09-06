import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  details=[]
 
  currentUser : any = {}
  current_user: string;
  access_token: string;
  currentId:any
  u_id
  updateForm: FormGroup;
  oldUserName: any;
  name: void;
  constructor(private apiService:ApiService, 
    private formbuilder:FormBuilder
    ,private router:Router ,private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = this.formbuilder.group({
      oldUserName:[''],
      newUserName:['',Validators.required]
      })
  this.current_user = localStorage.getItem("user_name")
  this.access_token = localStorage.getItem("access_token")
 console.log(localStorage.getItem('id'))
 this.currentId=this.activaterouter.snapshot.paramMap.get("id")
 console.log(this.currentId)
    this.getUser();
    //this.update();
  }
  getUser(){
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.get('http://192.168.1.123/boilerplate/api/web/v1/libmag/seealluser?username='+this.current_user, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.details = res.data;
      this.details.forEach((e : any) => {
        if(e.u_id == this.currentId){
          this.currentUser = e
        }
       });
     
     console.log(this.currentUser)
  });
  
   
  
  }
  delete(){
    let payload={
      user_id:this.u_id
    }
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/deleteuser?username=${this.current_user}`,payload ,{ headers, responseType: 'json' })
    .subscribe((res:any) =>{
  
      console.log(res.data)
     
    })
   this.getUser()
  }
  update(){
    let payload = {
      old_username:this.oldUserName,
      new_username:this.updateForm.value.newUserName
     
       }
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.post(`http:///192.168.1.123/boilerplate/api/web/v1/libmag/updateusername?username=${this.current_user}`, payload,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      payload = res.data;
       
   console.log(payload)
    this.getUser()
  });
 
  }

action(uname){
  this.oldUserName=uname.u_username
  this.name=uname.u_name
  this.u_id = uname.u_id
  console.log(this.oldUserName)
  //this.router.navigate(['/'+id])
}
}
