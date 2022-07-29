import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  current_user : any = "";
  access_token : any = "";

//  users=[
//   {
//     id:1,
//     profile:"../assets/profile.png",
//     name:"Name"
//   },
//   {
//     id:2,
//     profile:"../assets/profile.png",
//     name:"Name"
//   },
//   {
//     id:3,
//     profile:"../assets/profile.png",
//     name:"Name"
//   }

//  ]

 public users:object=[];


 
 constructor(private apiService:ApiService) { }

 ngOnInit(): void {
   this.access_token = localStorage.getItem("access_token")
   this.current_user = localStorage.getItem("user_name")
   this.getUsers()
   //this.userButtonClicked(user)
 }

 getUsers(){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiService.get(`http://192.168.0.156/boilerplate/api/web/v1/libmag/seealluser?username=${this.current_user}`, { headers, responseType: 'json' })
  .subscribe((res : any) => {
    this.users = res.data;
   
   console.log(res)
});

 }
 userButtonClicked(user){

  window.location.href='../singleUser?u_id='+ user.u_id;
  console.log(user.u_id)
}

 



}
function data(data: any, arg1: any, arg2: any) {
  throw new Error('Function not implemented.');
}

function user(user: any) {
  throw new Error('Function not implemented.');
}

