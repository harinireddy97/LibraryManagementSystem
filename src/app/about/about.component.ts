import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content="traditionally, collection of books used for reading or study, or the building or room in which such a collection is kept. The word derives from the Latin liber, “book,” whereas a Latinized Greek word, bibliotheca, is the origin of the word for library in German, Russian, and the Romance languages.From their historical beginnings as places to keep the business, legal, historical, and religious records of a civilization, libraries have emerged since the middle of the 20th century as a far-reaching body of information resources and services that do not even require a building. Rapid developments in computers, telecommunications, and other technologies have made it possible to store and retrieve information in many different forms and from any place with a computer and a telephone connection. The terms digital library and virtual library have begun to be used to refer to the vast collections of information to which people gain access over the Internet, cable television, or some other type of remote electronic connection."

  

  constructor() { }

  ngOnInit(): void {
  }

}
