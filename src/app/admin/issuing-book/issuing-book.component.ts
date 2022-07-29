import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuing-book',
  templateUrl: './issuing-book.component.html',
  styleUrls: ['./issuing-book.component.scss']
})
export class IssuingBookComponent implements OnInit {
issueBook:any={}
  constructor() { }

  ngOnInit(): void {
  }
  issue(){
    console.log(this.issueBook)
  }
}
