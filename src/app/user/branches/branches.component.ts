import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  branches=[
    {
      id:1,
      name:"Central Library",
      number: "09901714250",
      address:"XJ68+G2F, Old Race Course Rd, Austin Town, Neelasandra, Bengaluru, Karnataka 560047"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
