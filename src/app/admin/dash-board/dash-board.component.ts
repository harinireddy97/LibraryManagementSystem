import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  status=[

    {
      id:1,
      icon:"fas fa-shopping-cart",
      count: 2390,
      status:" Today orders"
    },
    
    {
      id:2,
      icon:"fas fa-user-alt",
      count: 4000,
      status:" Viewers"
    },
    
    {
      id:3,
      icon:"fas fa-users",
      count: 3000,
      status:" Subscribers"
    },
    
    {
      id:4,
      icon:"fas fa-star",
      count:25000 ,
      status:"Good Status"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
