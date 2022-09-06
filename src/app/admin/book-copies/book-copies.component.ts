import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-book-copies',
  templateUrl: './book-copies.component.html',
  styleUrls: ['./book-copies.component.scss']
})
export class BookCopiesComponent implements OnInit {
  headers=["Sno","Book Name","Number Of Books","Book Copies",""]
 header=["Book Copie Id","link"]
  id:any
  access_token: string;
  current_user: string;
  books:[];
  bookName
  bookCopie:FormGroup
  bookId: any;
  copy_id: any;
  copy={}
  constructor(private apiservice:ApiService,private formbuilder:FormBuilder,private modalService: NgbModal) { }
copies:any={}
open1(content) {
  this.modalService.open(content);
  
}
openXl(content,name) {
  this.modalService.open(content, { size: 'xl' });
  this.bookName=name.b_title;
  this.bookId=name.b_id
  console.log(this.bookName)
}
  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.bookDetails();
    this.bookCopie = this.formbuilder.group({
      b_title :['',Validators.required],
      newcopy_added:['',[Validators.required,Validators.pattern("[0-9]+$")]]
    })
    //this.bookSubmit();
  this.bookcopy();
    
  }
  bookDetails(){
 
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${this.current_user}`,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.books = res.data;
      this.id=res.b_id
     console.log(res.b_id)
     console.log(this.books)

  });
 // this.bookcopy(id)
}
updateCopies(copies){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/increasebookcount?username=${this.current_user}`,copies,{ headers, responseType: 'json' })
  .subscribe((res:any)=>{
 copies=res
 console.log(copies)
 this.bookDetails();
  })
}

action(name){
 this.bookCopie.setValue({
  newcopy_added:name.b_count,
  b_title:name.b_title
 })
}
deleteModel(name){
  this.bookcopy();
  this.bookName=name.b_title
  this.bookId=name.b_id
  this.copy_id=name.c_id

}

delete(){
  let payload={
    book_id:this.bookId,
    copy_id:this.copy_id
  }
 console.log('hi',payload)
  
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/deletecopy?username=${this.current_user}`,payload,{ headers, responseType: 'json' }).subscribe((res:any)=>{
    payload=res.data
  })
}
bookcopy(){
  //console.log(id)
  //console.log(details)
  console.log(this.copy_id)
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/getcopy?username=${this.current_user}&book_id=${this.bookId}`,{ headers, responseType: 'json' }).subscribe((res:any)=>{
    this.copy=res.data
 console.log(this.copy)
})
}
}




