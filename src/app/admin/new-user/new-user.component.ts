import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formData: FormGroup
  access_token: string;
  current_user: string;
 data: any=[]
  
 

  // new_name:"",
  // new_phno:'',
  // new_email:"",
  // new_dob:""


  constructor(private apiService: ApiService,private activaterouter:ActivatedRoute,
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")

    this.formData= this.formbuilder.group({
      u_name: ['', Validators.required],
      u_username: ['',[Validators.required, Validators.pattern("[a-zA-Z@0-9]*")]],
      u_password: ['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
      u_email:['',[Validators.required, Validators.pattern("[a-zA-Z@]*")]],
      u_phno:['',[Validators.required, Validators.pattern("[0-9]*")]],
      u_dob:['',[Validators.required, Validators.pattern("[0-9]*")]]
      })

  }
  addUser(loginData) {
    console.log(loginData)
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.post(`http://192.168.1.154/boilerplate/api/web/v1/libmag/enteruser?username=${this.current_user}`, loginData, { headers, responseType: 'json' })
      .subscribe((response: object) => {
        console.log(response);
        this.userList()
      })
  }

  userList(){
    
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiService.get(`http://192.168.1.154/boilerplate/api/web/v1/libmag/seealluser?username=${this.current_user}`, { headers, responseType: 'json' })
    .subscribe((res : any) => {
      console.log(res)
      this.data = res.data;
    });
}


}

