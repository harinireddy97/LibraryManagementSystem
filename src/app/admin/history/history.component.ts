import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent  {
  books=[
    {
      id:1,
      image:"http://ecx.images-amazon.com/images/I/51zKWkNhGKL.jpg",
      name:" A Study of History",
      authorName:" Arnold J. Toynbee ",
      description:"Arnold Toynbee's A Study of History is his magnum opus. In it he analyses the rise and fall of all 26 of the great world civilizations; whereas, previous historians had mainly concentrated on the West. Toynbee traces general themes focussing on the genesis, growth, and disintegration of civilisations.",
      addInfo:"Arnold Toynbee's A Study of History is his magnum opus. In it he analyses the rise and fall of all 26 of the great world civilizations; whereas, previous historians had mainly concentrated on the West. Toynbee traces general themes focussing on the genesis, growth, and disintegration of civilisations."
    },
    {
      id:2,
      image:"http://ecx.images-amazon.com/images/I/514VIHgKhTL.jpg",
      name:"The Making of the English Working Class",
      authorName:"E. P. Thompson",
      description:"This book transformed our understanding of English social history. Thompson revealed how working class people were not merely victims of history, moved by powerful forces outside of themselves, but were also active in creating their own culture and future, during the degradation of the industrial revolution.",
      addInfo:"This book transformed our understanding of English social history. Thompson revealed how working class people were not merely victims of history, moved by powerful forces outside of themselves, but were also active in creating their own culture and future, during the degradation of the industrial revolution."
    },
    {
      id:3,
      image:"http://ecx.images-amazon.com/images/I/51GTl1XNQyL.jpg",
      name:"The Mediterranean and the Mediterranean World in the Age of Philip II",
      authorName:"  Fernand Braudel ",
      description:"The Mediterranean and the Mediterranean World in the Age of Philip II is the most influencial work of the great 20th century historian Fernand Braudel, a leader of the Annales School. This work perfectly demonstrates Braudel’s l'histoire totale, writing history from as many perspectives as possible.",
      addInfo:"The Mediterranean and the Mediterranean World in the Age of Philip II is the most influencial work of the great 20th century historian Fernand Braudel, a leader of the Annales School. This work perfectly demonstrates Braudel’s l'histoire totale, writing history from as many perspectives as possible."
    },{
      id:4,
      image:"http://ecx.images-amazon.com/images/I/41Gvu1GYgdL.jpg",
      name:" The Age of Revolution: 1789-1848 (4 Volume History of the Modern World)",
      authorName: "Eric Hobsbawm",
      description:"This magisterial volume follows the death of ancient traditions, the triumph of new classes, and the emergence of new technologies, sciences, and ideologies, with vast intellectual daring and aphoristic elegance. Part of Eric Hobsbawm's epic four-volume history of the modern world, along with The Age of Capitalism, The Age of Empire, and The Age of Extremes.",
      addInfo:"This magisterial volume follows the death of ancient traditions, the triumph of new classes, and the emergence of new technologies, sciences, and ideologies, with vast intellectual daring and aphoristic elegance. Part of Eric Hobsbawm's epic four-volume history of the modern world, along with The Age of Capitalism, The Age of Empire, and The Age of Extremes."
    },
    {
      id:5,
      image:"http://ecx.images-amazon.com/images/I/51xuCQy-2mL.jpg",
      name:"The Radicalism of the American Revolution",
      authorName:"Gordon S. Wood",
      description:"Awarded the 1993 Pulitzer Prize for History, The Radicalism of the American Revolution by Gordon Wood argues that the American Revolution by rights deserves a place among the French, Industrial and Russian Revolutions as one of the great events in history. Wood synthesizes all the pertinent issues.",
      addInfo:"In a grand and immemsely readable synthesis of historical, political, cultural, and economic analysis, a prize-winning historian depicts much more than a break with England. He gives readers a revolution that transformed an almost feudal society into a democratic one, whose emerging realities sometimes baffled and disappointed its founding fathers."
    },
    {
      id:6,
      image:"http://ecx.images-amazon.com/images/I/51FgcC7xc8L.jpg",
      name:"The Guns of August",
      authorName:" Barbara Tuchman",
      description:"The Pulitzer Prize winning, The Guns of August, by Barbara W. Tuchman, is focussed on the first month of World War I. Tuchman explains in detail the events that led to the war. The book was featured in the Modern Library's Top 100 nonfiction books of the 20th Century. ",
      addInfo:"In this landmark, Pulitzer Prizeâ€“winning account, renowned historian Barbara W. Tuchman re-creates the first month of World War I: thirty days in the summer of 1914 that determined the course of the conflict, the century, and ultimately our present world. Beginning with the funeral of Edward VII, Tuchman traces each step that led to the inevitable clash. And inevitable it was, with all sides plotting their war for a generation. "
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


