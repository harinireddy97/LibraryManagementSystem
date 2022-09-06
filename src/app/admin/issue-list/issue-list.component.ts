import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  headers=["Sno","User Name","Book Id","BookCopy_Id","Issued Date"]
  // rows=[
  //   {
  //     id:1,
  //     sno:1,
  //     username:"yyyy",
  //     bookId:2017,
  //     returndate:"13-06-2022"
      
  //   },
  //   {
  //     id:2,
  //     sno:2,
  //     username:"yyyy",
  //     bookId:5039,
  //     returndate:"14-06-2022"
      
  //   },
  //   {
  //     id:3,
  //     sno:3,
  //     username:"yyyy",
  //     bookId:4098,
  //     returndate:"19-06-2022"
      
  //   }
  // ]
  issuedBookList=[]
  access_token: string;
  current_user: string;
  selectedUser:''
  allIssue=[]
  list=[]
  constructor(private apiservice:ApiService) { }
  
  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.issuedBooks();
  }
  issuedBooks(){
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransaction?username=${this.current_user}`,{ headers, responseType: 'json' })
    .subscribe((res:any)=>{
    this.issuedBookList=res.data
    this.allIssue=res.data
    console.log(this.issuedBookList)
  })
  }
  filter(){
    this.issuedBookList = []
    if(this.selectedUser == ""){
     this.issuedBookList= this.allIssue
    }else{
      console.log(this.selectedUser)
      let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

      this.apiservice.get('http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyusername?username='+this.current_user+ '&search_name=' +this.selectedUser,{ headers, responseType: 'json' }).subscribe((res : any)=>{
        this.list=res
        this.issuedBookList = res.data
        console.log(this.list)
      });
    }
  }

}
