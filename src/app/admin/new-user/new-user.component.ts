import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formData: any = {}
  access_token: string;
  current_user: string;
 data: any=[]
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    // this.createUser()
  }
  addUser() {
    this.apiService.add('http://192.168.0.156/boilerplate/api/web/v1/libmag/enteruser', this.formData)
      .subscribe((response: object) => {
        console.log(response);
        this.userList()
      })

  }

  userList(){
    
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.get(`http://192.168.0.156/boilerplate/api/web/v1/libmag/seealluser?username=${this.current_user}`, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.data = res.data;
     
     console.log(res)
  });
  
}
 

}

