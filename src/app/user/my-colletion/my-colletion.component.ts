import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-my-colletion',
  templateUrl: './my-colletion.component.html',
  styleUrls: ['./my-colletion.component.scss']
})
export class MyColletionComponent implements OnInit {
  headers=["Sno","Book Name","Issued Date","Expected-Return Date","Fine","Return"]
  bookId
  details:[]
  userId
  date
  access_token: string;
  current_user: string;
  bookName: any;
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.userId = localStorage.getItem('user_id')
    this.bookDetails();
      // return moment.format('MMM DD,YYYY')
  
  }
 bookDetails(){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyid?username=${this.current_user}`,{ headers, responseType: 'json' }).subscribe((res:any)=>
{
  this.details=res.data
console.log(this.details)
})
 }
 return(book){
this.bookId = book.book_id
this.bookName = book.bookname
console.log(this.bookId)
  
 }

 returnBook(){
  let payload={
    user_id: this.userId,
    book_id : this.bookId,
    act_returneddate: this.date
  }
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/returnbook?username=${this.current_user}`,{payload},{ headers, responseType: 'json' }).subscribe((res:any)=>{
    res = res.data
    console.log(res)
  })

}
}
