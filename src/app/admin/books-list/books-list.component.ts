import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  current_user : any = "";
  access_token : any = "";
  bookForm: any;
   public books:object=[]
  book_id
  bookList
  book
  new_title: any;
  new_catagory: any;
  new_author: any;
 
  constructor(private apiservice:ApiService ,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formbuilder.group({
      bookName:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      author:['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]]  ,
      catagory:['',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]],   
      description:['',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      count:['',[Validators.required,Validators.pattern("^[0-9]+$")]]
      })
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.bookDetails();
    //this.bookSubmit();
  }
  bookDetails(){
  
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/seebook?username=${this.current_user}`,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.books = res.data;
    
     console.log(this.books)
    
  });
}
add(){
  this.book = "add"
}
delete(data){
  this.book_id = data.b_id
}
edit(data)
{
  this.book ="edit"
  this.new_title  = data.b_title ,
  this.new_author = data.b_author ,
  this.new_catagory = data.b_catagory 
  this.book_id = data .b_id
}

bookSubmit(){
  if(this.book == "add"){
  let newBook={
    b_title:this.bookForm.value.bookName,
    b_author:this.bookForm.value.author,
    b_catagory:this.bookForm.value.catagory,
    b_description:this.bookForm.value.description,
    b_count:this.bookForm.value.count

   }
  console.log(newBook)
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/enternewbook?username=${this.current_user}`,newBook,{ headers, responseType: 'json' })
  .subscribe((res)=>
  console.log(res));window.location.href="../booksList"
 
}else if(this.book == "edit"){

  let payload={
    new_title :this.new_title,
    new_author : this.new_author,
    new_catagory :this.new_catagory,
    book_id : this.book_id
  }


  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };

  this.apiservice.post(`http://192.168.1.123/boilerplate/api/web/v1/libmag/updatebook?username=${this.current_user}`,payload,{headers,responseType:'json'})
  .subscribe((res:any)=> {
    payload = res.data
    console.log(payload)
  })
}
this.bookDetails()
}


deleteBook(){
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.get(`http://192.168.1.123/boilerplate/api/web/v1/libmag/deletebook?username=${this.current_user}&book_id=${this.book_id}`,{ headers, responseType: 'json' })
  .subscribe((res)=>{
    console.log(res)
  })
}

}