import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  closeResult: string;
  magazine=[
    {
      id:1,
      image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
      name:"Black Orange Elegant Modern Car "
    },
    {
      id:2,
      image:"https://files.magzter.com/resize/magazine/1336134753/1592999129/view/1.jpg",
      name:" Pratiyogita Darpan Magazine"
    },
    {
      id:3,
      image:"https://files.magzter.com/resize/magazine/1466680947/1568717952/view/1.jpg",
      name:"Competition Success Review"
    },
    {
      id:4,
      image:"https://files.magzter.com/resize/magazine/Digit/1496299662/view/1.jpg",
      name:" Digit Magazine"
    },
    {
      id:5,
      image:"https://files.magzter.com/resize/magazine/1338812966/1592992501/view/1.jpg",
      name:" Champak Magazine"
    },
    {
      id:6,
      image:"https://www.indiamags.com/media/catalog/product/cache/1/image/285x372/9df78eab33525d08d6e5fb8d27136e95/m/a/magic_pot_-1_year_1.jpg",
      name:" Magic Pot Magazine"
    },
    {
      id:7,
      image:"https://files.magzter.com/resize/magazine/1366109351/1593072713/view/1.jpg",
      name:" The Week Magazine"
    },
    {
      id:8,
      image:"https://files.magzter.com/resize/magazine/Car%20India/1591740572/view/1.jpg",
      name:" Car India "
    },
    {
      id:9,
      image:"https://files.magzter.com/resize/magazine/1338193253/1592312227/view/1.jpg",
      name:"  Forbes India"
    }
  ]
  books=[
    {
      id:1,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1461354651i/15839976.jpg",
      name:"  Red Rising",
      authorName:"Pierce Brown",
      description:" you'll find stories of men and women finding their inner strength when all seems lost. You'll also find me exploring themes of love, violence, hope, and power--what it means, why people seek it, and how they hold onto it."
    },
    {
      id:2,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551144577i/18405.jpg",
      name:" Gone with the Wind",
      authorName:"Margaret Mitchell",
      description:"Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936. The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and Reconstruction Era."
    },{
      id:3,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547386427i/40245130.jpg",
      name:" Lost Children Archive",
      authorName:"Valeria Luiselli",
      description:"The novel details a cross-country journey from New York to Arizona in a car by a husband and wife, Mama and Papa, and their children, 'the girl'and 'the boy,' both from previous relationships"
    },
    {
      id:4,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391340697i/19300781.jpg",
      name:"India: Leading Issues in Economic Development",
      authorName:"R.K.Mishara",
      description:"Since 1964, Leading Issues in Economic Development has been a market leading undergraduate development textbook. Reviewers praise the new edition for its explanation of theories and its wide range of references to authors, international organisations and web site"
    },
    {
      id:5,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441814056i/26257680.jpg",
      name:"Modi's World: Expanding India's Sphere of Influence",
      authorName:"C.Raja Mohan",
      description:"Modi's World tells the story of Prime Minister Narendra Modi's vigorous diplomacy and his aspiration to elevate India's place in the world. It offers insights into Modi's foreign policy inheritance, his efforts to build on the foundations laid by his recent predecessors, Atal Bihari Vajpayee and Manmohan Singh, and set more ambitious international goals of his own for India"
    },
    {
      id:6,
      image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631194786i/18635016.jpg",
      name:"The One",
      authorName:"Maxon",
      description:"The Selection changed America Singer's life in ways she never could have imagined. Since she entered the competition to become the next princess of Illéa, America has struggled with her feelings for her first love, Aspen—and her growing attraction to Prince Maxon. "
    }
  ]
  constructor(private modalService: NgbModal) {}
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
