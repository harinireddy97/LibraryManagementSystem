import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent  {

 
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
    },{
      id:4,
      image:"https://images2.penguinrandomhouse.com/cover/9781101904831",
      name:"The Sirens of Mars",
      authorName:"Sarah Stewart Johnson",
      description:"In this beautifully observed, deeply personal book, Georgetown scientist Sarah Stewart Johnson tells the story of how she and other researchers have scoured Mars for signs of life, transforming the planet from a distant point of light into a world of its own.",
      addInfo:"In this beautifully observed, deeply personal book, Georgetown scientist Sarah Stewart Johnson tells the story of how she and other researchers have scoured Mars for signs of life, transforming the planet from a distant point of light into a world of its own."
    },
    {
      id:5,
      image:"https://images1.penguinrandomhouse.com/cover/9781984819192",
      name:"Brief Answers to the Big Questions",
      authorName:"Stephen Hawking",
      description:"The world-famous cosmologist and author of A Brief History of Time leaves us with his final thoughts on the biggest questions facing humankind. Will humanity survive? Should we colonize space? Does God exist? .",
      addInfo:"Hawking not only unraveled some of the universe’s greatest mysteries but also believed science plays a critical role in fixing problems here on Earth. Now, as we face immense challenges on our planet—including climate change, the threat of nuclear war, and the development of artificial intelligence—he turns his attention to the most urgent issues facing us."
    },
    {
      id:6,
      image:"https://images1.penguinrandomhouse.com/cover/9780593328897",
      name:"Helgoland",
      authorName:"Carlo Rovelli",
      description:"One of the world’s most renowned theoretical physicists, Carlo Rovelli has entranced millions of readers with his singular perspective on the cosmos. In Helgoland, he examines the enduring enigma of quantum theory.",
      addInfo:"As scientists and philosophers continue to fiercely debate the meaning of the theory, Rovelli argues that its most unsettling contradictions can be explained by seeing the world as fundamentally made of relationships rather than substances. We and everything around us exist only in our interactions with one another. This bold idea suggests new directions for thinking about the structure of reality and even the nature of consciousness."
    }
  ]
  // book=[
  //   {
  //     id:1,
  //     image:"https://images3.penguinrandomhouse.com/cover/9780804172721",
  //     information:"As Bill Bryson writes, “We pass our existence within this wobble of flesh and yet take it almost entirely for granted. "
      
  //   }
  // ]

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  }

 

