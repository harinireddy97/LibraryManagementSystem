import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-copies',
  templateUrl: './book-copies.component.html',
  styleUrls: ['./book-copies.component.scss']
})
export class BookCopiesComponent implements OnInit {
  headers=["Sno","Book Name","Count",""]
  rows=[
    {
      id:1,
      sno:1,
      bookname:"bodyParts",
      count:4
      
    },
    {
      id:1,
      sno:2,
      bookname:"The One",
      count:4
      
    }
  ]
  constructor() { }
copies:any={}
  ngOnInit(): void {
  }
  bookCopies(){
console.log(this.copies)
  }
}
