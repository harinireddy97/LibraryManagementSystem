import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  headers=["Sno","User Name","Book Id","BookCopy_Id","Issued Date","Return Date","Fine",""]
  access_token: string;
  current_user: string;
  issuedBookList: any;
  allIssue: any;
  selectedUser: string;
  list: any;

    
  constructor(
    private apiService : ApiService,
    
  ) { }

  ngOnInit(): void {

    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.issuedBooks();
  }
  issuedBooks(){
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

    this.apiService.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransaction?username=${this.current_user}`,{ headers, responseType: 'json' })
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

      this.apiService.get('http://192.168.1.123/boilerplate/api/web/v1/libmag/readtransactionbyusername?username='+this.current_user+ '&search_name=' +this.selectedUser,{ headers, responseType: 'json' }).subscribe((res : any)=>{
        this.list=res
        this.issuedBookList = res.data
        console.log(this.list)
      });
    }
  }

}
