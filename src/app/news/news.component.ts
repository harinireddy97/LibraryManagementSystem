import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  image=[
    {
      id:1,
      img:"https://ml.globenewswire.com/Resource/Download/9c430095-89f7-48b4-b8f0-e1f4ed1a5660?size=3"
    },
    // {
    //   id:2,
    //   img:"https://ml.globenewswire.com/Resource/Download/9c430095-89f7-48b4-b8f0-e1f4ed1a5660?size=3"
    // }
  ]
news=[
  {
    id:1,
    header:"Warehouse Management System Market Is Expected to ...",
    content:"The development of digital technology, growth of e-commerce and growing need for improved supply chain and customer relationship management are the major growth drivers of the warehouse management system (WMS) market.",
    time:"1 Weekago"
  },
  {
    id:2,
    header:"Learn to Use New Libraries Search Tool With Instructional ...",
    content:"OneSearch, the new libraries search tool, was launched July 6. Libraries personnel have created a series of instructional videos to help users become acquainted with the new tool and all of its enhanced features.",
    time:"4 daysago"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
