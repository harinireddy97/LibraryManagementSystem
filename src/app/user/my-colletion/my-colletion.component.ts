import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-colletion',
  templateUrl: './my-colletion.component.html',
  styleUrls: ['./my-colletion.component.scss']
})
export class MyColletionComponent implements OnInit {
  headers=["Sno","Book Name","Book Id","Book Request"]
  rows=[
    {
      id:1,
      sno:1,
      bookId:2017,
      bookname:"xxxx"
      
    },
    {
      id:2,
      sno:2,
      bookname:"xxxx",
      bookId:5039
      
    },
    {
      id:3,
      sno:3,
      bookname:"xxxx",
      bookId:4098
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
