import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-romantic',
  templateUrl: './romantic.component.html',
  styleUrls: ['./romantic.component.scss']
})
export class RomanticComponent  {

  books=[
    {
      id:1,
      image:"https://images-na.ssl-images-amazon.com/images/I/513M+R3gf3L._SX460_BO1,204,203,200_.jpg",
      name:"No Matter What... I will always love you! ",
      authorName:"Rohit Dawesar",
      description:"An ordinary-turned-extraordinary tale about the magic of love.. From romantic escapes in the beaches of Goa to witnessing the beautiful Manali sky lit up with fireworks on a Diwali night, Rishi and Mishika’s lives were like an exciting roller-coaster ride every moment that they were together. But when Mishika disappears on the morning of their engagement without leaving so much as a wisp of a trace behind, Rishi finds himself alone and adrift in a dark sea of doubts and fears",
      addInfo:"An ordinary-turned-extraordinary tale about the magic of love.. From romantic escapes in the beaches of Goa to witnessing the beautiful Manali sky lit up with fireworks on a Diwali night, Rishi and Mishika’s lives were like an exciting roller-coaster ride every moment that they were together. But when Mishika disappears on the morning of their engagement without leaving so much as a wisp of a trace behind, Rishi finds himself alone and adrift in a dark sea of doubts and fears."
    },
    {
      id:2,
      image:"https://images-na.ssl-images-amazon.com/images/I/41iTd7dkt1L._SX460_BO1,204,203,200_.jpg",
      name:"You Are Still the One",
      authorName:" Himanshu Rai",
      description:"A heart-warming story about love, faith, smiles, and friendship. You Are Still the One traces the lives of Trisha, Aditya, Varun, Meetu, and Dakshit. Trisha, a lively and talented young seventeen-year-old, has been diagnosed with Hodgkin Lymphoma. Her father brings her to Delhi for treatment where she meets her doctor’s son, Aditya, a smart, cheerful army officer. ",
      addInfo:"A heart-warming story about love, faith, smiles, and friendship. You Are Still the One traces the lives of Trisha, Aditya, Varun, Meetu, and Dakshit. Trisha, a lively and talented young seventeen-year-old, has been diagnosed with Hodgkin Lymphoma. Her father brings her to Delhi for treatment where she meets her doctor’s son, Aditya, a smart, cheerful army officer."
    },
    {
      id:3,
      image:"https://images-na.ssl-images-amazon.com/images/I/418ky++EMuL._SX460_BO1,204,203,200_.jpg",
      name:"One Day, Life Will Change",
      authorName:" Saranya Umakanthan",
      description:"Love... does it mean running around the trees or vacationing in Switzerland, singing tra-la-la in the snow? Is it about gifting teddy bears and roses to your partner?After losing everything she holds dear... her love, her parents, and even her singing, Samaira is dejected. She is at her lowest point in life and has no idea what she wants.Vivian is the successful and dynamic head of Creative Tanks and dreams of being the top entrepreneur in India.",
      addInfo:"Love... does it mean running around the trees or vacationing in Switzerland, singing tra-la-la in the snow? Is it about gifting teddy bears and roses to your partner?After losing everything she holds dear... her love, her parents, and even her singing, Samaira is dejected. She is at her lowest point in life and has no idea what she wants.Vivian is the successful and dynamic head of Creative Tanks and dreams of being the top entrepreneur in India."
    },{
      id:4,
      image:"https://images-eu.ssl-images-amazon.com/images/I/413OgI8KzuL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      name:"You Only Live Once ",
      authorName:"Stuti Changle",
      description:"Find the answers about your own life in this story about searching for love and discovering yourself. Join a broken but rising YouTube star Alara, a struggling but hopeful stand-up comedian Aarav, and a zany but zen beach shack owner Ricky. Together, take the journey to seek the truth behind the famous singer Elisha's disappearance somewhere by the deep sea in Goa.",
      addInfo:"Find the answers about your own life in this story about searching for love and discovering yourself. Join a broken but rising YouTube star Alara, a struggling but hopeful stand-up comedian Aarav, and a zany but zen beach shack owner Ricky. Together, take the journey to seek the truth behind the famous singer Elisha's disappearance somewhere by the deep sea in Goa."
    },
    {
      id:5,
      image:"https://images-eu.ssl-images-amazon.com/images/I/51S9hxaZfdL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      name:"The Forty Rules of Love",
      authorName:"Elif Shafak ",
      description:"*The international bestseller from the author of the Booker-shortlisted novel, 10 Minutes 38 Seconds in this Strange World** One of the BBC's '100 Novels that Shaped the World'* 'Every true love and friendship is a story of unexpected transformation. If we are the same person before and after we loved, that means we haven't loved enough...' Ella Rubinstein has a husband, three teenage children, and a pleasant home. Everything that should make her confident and fulfilled.",
      addInfo:"*The international bestseller from the author of the Booker-shortlisted novel, 10 Minutes 38 Seconds in this Strange World** One of the BBC's '100 Novels that Shaped the World'* 'Every true love and friendship is a story of unexpected transformation. If we are the same person before and after we loved, that means we haven't loved enough...' Ella Rubinstein has a husband, three teenage children, and a pleasant home. Everything that should make her confident and fulfilled."
    },
    {
      id:6,
      image:"https://images-eu.ssl-images-amazon.com/images/I/41yKpY-h99L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      name:"The Diary of My Love ",
      authorName:"Deesha Sangani",
      description:"Anushkaa is young, dynamic and deeply passionate, with her goals clearly set out. Fresh out of college, she has just stepped into the corporate world, chasing her dreams. Life seems perfect. Ayush meets Anushkaa on her first day at work, and feels a spark of liking rush through him. Torn between his heart and mind, he is sure he is smitten by her magical charm.",
      addInfo:"Anushkaa is young, dynamic and deeply passionate, with her goals clearly set out. Fresh out of college, she has just stepped into the corporate world, chasing her dreams. Life seems perfect. Ayush meets Anushkaa on her first day at work, and feels a spark of liking rush through him. Torn between his heart and mind, he is sure he is smitten by her magical charm. "
    }
  ]
  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  

}

