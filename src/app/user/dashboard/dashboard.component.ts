import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/apiService/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  closeResult: string;
  
  books=[]
  access_token: string;
  current_user: string;
 selectedBook:any=''
  user_id: any;
  book_id: any;
  allBooks: any;
  categoryList
  constructor(private modalService: NgbModal, 
    private apiservice:ApiService,
    private router:Router,
    ) { 
    
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });

  }
  open1(content,bookid) {
    this.modalService.open(content);
    this.bookIssue(bookid);
  }
  

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.user_id=localStorage.getItem('user_id')
    console.log(this.user_id)
    this.bookDetails();
    this.categories()
    //this.bookSubmit();
  }
  bid:any=''
  bookDetails(){
  
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${this.current_user}`,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.books = res.data;
      this.allBooks=res.data;
      this.bid=res.data.b_id
     
     console.log(res)
  });
 
}
categories(){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

      this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readcatagory?username=${this.current_user}`,{ headers, responseType: 'json' }).subscribe((res:any)=>{
        this.categoryList=res.data

        console.log(this.categoryList)
      })
}

bookIssue(id){
 let payload={
    user_id:this.user_id,
    book_id:id
  }
  console.log(payload.book_id)
   console.log(payload)
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/maketransaction?username=${this.current_user}`, payload,{ headers, responseType: 'json' })
  .subscribe((res : any) => {
    payload = res.data;
     
 console.log(payload)
});
this.router.navigate[('/myBooks')]
}
filter(selectedBook){
  console.log(selectedBook.target.value)
let books = selectedBook.target.value
  if(this.selectedBook == "" ){
   this.books = this.allBooks
  }else{
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/readbookbycatagory?username=${this.current_user}&catagory=${books}`,{ headers, responseType: 'json' })
    .subscribe((res:any)=>{
      this.books =res.data
      console.log(res)
    })
  }

 
 
  
}

  }
  