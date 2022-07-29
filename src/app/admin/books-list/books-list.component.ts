import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  current_user : any = "";
  access_token : any = "";
  // magazine=[
  //   {
  //     id:1,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:2,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:3,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:4,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   }
  // ]

  // books=[
  //   {
  //   id:1,
  //   image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143032/cranewife.jpg",
  //   name:"The Crane Wife",
  //   authorName:"Review by Carla Jean Whitley",
  //   description:"In this collection of essays, CJ Hauser excavates her past loves and losses, thoughtfully examines their aftermath and declares the pain of love to be worth the risk."
  // },
  // {
  //   id:2,
  //   image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31144933/normalfamily.jpg",
  //   name:"Normal Family",
  //   authorName:"Review by Jessica Wakeman",
  //   description:"Is there anything original left to say about surviving a dysfunctional upbringing? Normal Family by Chrysta Bilton takes this question almost as a dare."
  // },
  // {
  //   id:3,
  //   image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143107/deathbybubbletea.jpg",
  //   name:"Death by Bubble Tea",
  //   authorName:"Review by Jamie Orsini",
  //   description:"Death by Bubble Tea is a heartfelt and delicious mystery that, in a brilliant choice by author Jennifer J. Chow, centers on a family-run food stall."
  // },
  // {
  //   id:4,
  //   image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143652/hawkmountain.jpg",
  //   name:"Hawk Mountain",
  //   authorName:"Review by Maya Fleischmann",
  //   description:"With haunting prose and deeply atmospheric descriptions, Conner Habib’s Hawk Mountain is a disturbing descent into the convulsions of the human mind and heart."
  // },
  // ]
   public books:object=[]
   public newBook:any={
    b_title:"",
    b_author:"",
    b_catagory:"",
    b_description:"",
    b_count:""

   }
 
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.access_token = localStorage.getItem("access_token")
    this.current_user = localStorage.getItem("user_name")
    this.bookDetails();
    //this.bookSubmit();
  }
  bookDetails(){
  
    let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
    this.apiservice.get(`http://192.168.0.156/boilerplate/api/web/v1/libmag/seebook?username=${this.current_user}`,{ headers, responseType: 'json' })
    .subscribe((res : any) => {
      this.books = res.data;
     
     console.log(res)
  });
}
bookSubmit(){
  console.log(this.newBook)
  let headers = { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.access_token };
  this.apiservice.post(`http://192.168.0.156/boilerplate/api/web/v1/libmag/enternewbook?username=${this.current_user}`,this.newBook,{ headers, responseType: 'json' })
  .subscribe((res)=>
  console.log(res));window.location.href="../booksList"
 
}
}
