import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  {

  books=[
    {
      id:1,
      image:"https://images3.penguinrandomhouse.com/cover/9780804172721",
      name:"The Body",
      authorName:"Bill Bryson",
      description:"Bestselling author Bill Bryson takes us on a head-to-toe tour of the marvel that is the human body—how it functions, its remarkable ability to heal itself, and (unfortunately) the ways it can fail. Full of extraordinary facts and irresistible Brysonesque anecdotes.",
      addInfo:"As Bill Bryson writes, “We pass our existence within this wobble of flesh and yet take it almost entirely for granted.” The Body will cure that indifference with generous doses of wondrous, compulsively readable facts and information. As addictive as it is comprehensive, this is Bryson at his very best, a must-read owner’s manual for every body."
    },
    {
      id:2,
      image:"https://images2.penguinrandomhouse.com/cover/9780525565994",
      name:"Finding the Mother Tree",
      authorName:"Suzanne Simard",
      description:"From the world’s leading forest ecologist who forever changed how people view trees and their connections to one another and to other living things in the forest—a moving, deeply personal journey of discovery.",
      addInfo:"In this, her first book, now available in paperback, Simard brings us into her world, the intimate world of the trees, in which she brilliantly illuminates the fascinating and vital truths–that trees are not simply the source of timber or pulp, but are a complicated, interdependent circle of life; that forests are social, cooperative creatures connected through underground networks by which trees communicate their vitality and vulnerabilities with communal lives not that different from our own."
    },
    {
      id:3,
      image:"https://images3.penguinrandomhouse.com/cover/9780525561996",
      name:"Rationality",
      authorName:"Steven Pinker",
      description:"Rationality matters. It leads to better choices in our lives and in the public sphere, and is the ultimate driver of social justice and moral progress. Brimming with Steven Pinker’s customary insight and humor, Rationality will enlighten, inspire",
      addInfo:"Rationality also explores its opposite: how the rational pursuit of self-interest, sectarian solidarity, and uplifting mythology can add up to crippling irrationality in a society. Collective rationality depends on norms that are explicitly designed to promote objectivity and truth."
    },
  ]
  headers=["Sno","Category Name","Short Name"," Link",""]
  rows=[
    {
      id:1,
      sno:1,
      category:"science",
      shtname:"Ns",
      
    },
    {
      id:1,
      sno:2,
      category:"History",
      shtname:"Hist",
      
      
      
    }
  ]
  category:any={}
  constructor(){

  }
  book(){
    console.log(this.category)
  }

}
