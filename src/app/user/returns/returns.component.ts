import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  headers=["Sno","Book Name","Book Id","Return Date","Return"]
  rows=[
    {
      id:1,
      sno:1,
      bookname:"xxxx",
      bookId:2017,
      returndate:"13-06-2022"
      
    },
    {
      id:2,
      sno:2,
     bookname:"xxxx",
      bookId:5039,
      returndate:"14-06-2022"
      
    },
    {
      id:3,
      sno:3,
      bookname:"xxxx",
      bookId:4098,
      returndate:"19-06-2022"
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
