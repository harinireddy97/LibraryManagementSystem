import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  headers=["Sno","Book Name","Copy Id","Return Date","Fine","Return"]
  details:[]
  access_token: string;
  current_user: string;
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.returnList();
  }
 returnList(){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyid?username=${this.current_user}`,{ headers, responseType: 'json' }).subscribe((res:any)=>
{
  this.details=res.data
})
 }
returnBook(){
  let payload={
    user_name : this.current_user,
    book_name : "Why I am an Atheist and Other Works",
    act_returneddate : "2022-08-07"
  }
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/returnbook?username=${this.current_user}`,{payload},{ headers, responseType: 'json' }).subscribe((res:any)=>{
    res = res.data
  })

}

}
