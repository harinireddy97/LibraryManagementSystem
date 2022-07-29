import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  details=[]
 
  current_user: string;
  access_token: string;
 
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  this.current_user = localStorage.getItem("user_name")
  this.access_token = localStorage.getItem("access_token")
 console.log(localStorage.getItem('id'))
  
    this.getUser();
  }
  getUser(){
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.get('http://192.168.0.156/boilerplate/api/web/v1/libmag/seealluser?username='+this.current_user, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.details = res.data;
   
  });
  }
  delete(user_id){
    
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.post(`http://192.168.0.156/boilerplate/api/web/v1/libmag/deleteuser?username=${this.current_user}`,{user_id} ,{ headers, responseType: 'json' })
    .subscribe((res:any) =>{
  
      console.log(res.data)
     
    })
    if(user_id == 0){
      user_id.style.color ="red"
    }
   else{
    user_id.style.color = "white"
   }
  }

}
