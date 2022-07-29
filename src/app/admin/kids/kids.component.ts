import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent {
  books=[
    {
      id:1,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_77048898-1-e1500053979615.jpg?auto=format&q=60&fit=max&w=930",
      name:"Gute-Nacht Gechichten",
      authorName:"Bill Bryson",
      description:"Hier findest Du eine große Sammlung toller Gute Nacht Geschichten zum Vorlesen. Alle Geschichten sind von uns selbst geschrieben und liebevoll illustriert. Viel Freude beim Lesen!.",
      addInfo:"Hier findest Du eine große Sammlung toller Gute Nacht Geschichten zum Vorlesen. Alle Geschichten sind von uns selbst geschrieben und liebevoll illustriert. Viel Freude beim Lesen!."
    },
    {
      id:2,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_85611579-1-e1500054016566.png?auto=format&q=60&fit=max&w=930",
      name:"Mr. Hoopyloops and His Amazing Glasses",
      authorName:" Fabrice Bertolotto.",
      description:"In this colorful children's book that has won multiple literary awards, kids will learn to see the world around them a little bit differently. They will be introduced to a character who is eccentric, lovable, and talented.Children will fall in love with the beautiful illustrations and parents will love the message: see the extraordinary in the ordinary.",
      addInfo:"In this colorful children's book that has won multiple literary awards, kids will learn to see the world around them a little bit differently. They will be introduced to a character who is eccentric, lovable, and talented.Children will fall in love with the beautiful illustrations and parents will love the message: see the extraordinary in the ordinary."
    },
    {
      id:3,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_80641867-1.jpg?auto=format&q=60&fit=max&w=930",
      name:"Der Schwanenprinz",
      authorName:" *Alexandra*",
      description:"Buch/Liedtexte/Produktion/Regie stammen von dem Künstlerpaar Janet Chvatal & Marc Gremm. Die Musik stammt von Nic Raine. Die deutsche Übersetzung wurde von Esmeralda Endruweit angefertigt. Die Co-Regie/Staging übernahm Volker Bleck. Die Regie-Assistenz übernahm Christopher Green und die Choreographie Volker Bleck und Nia Hawyes.",
      addInfo:"Buch/Liedtexte/Produktion/Regie stammen von dem Künstlerpaar Janet Chvatal & Marc Gremm. Die Musik stammt von Nic Raine.[3] Die deutsche Übersetzung wurde von Esmeralda Endruweit angefertigt. Die Co-Regie/Staging übernahm Volker Bleck. Die Regie-Assistenz übernahm Christopher Green und die Choreographie Volker Bleck und Nia Hawyes."
    },{
      id:4,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/68f9f776-78f5-417f-911e-a94b977421a9-1.jpg?auto=format&q=60&fit=max&w=930",
      name:"A Town Called Hairyscary ",
      authorName:"hadynoody",
      description:"Hairy Scary is a French animated television series, directed by Wolf-Rudiger 'Rudi' Bloss, created by Jan Rijsselberge and co-produced by Alphanim. Hairy scary is a lush 3D CGI series geared for kids 6 to 8. It is a comedy centred on two kids.",
      addInfo:"Hairy Scary is a French animated television series, directed by Wolf-Rudiger 'Rudi' Bloss, created by Jan Rijsselberge and co-produced by Alphanim. Hairy scary is a lush 3D CGI series geared for kids 6 to 8. It is a comedy centred on two kids."
    },
    {
      id:5,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_27516952-1.jpg?auto=format&q=60&fit=max&w=930",
      name:"Calico Bear",
      authorName:"ni.ya",
      description:"Calico originated in Calicut, from which the name of the textile came, in South India, now Kerala, during the 11th century,where the cloth was known as 'chaliyan'. It was mentioned in Indian literature by the 12th century when the polymath and writer Hemachandra described calico fabric prints with a lotus design. Calico was woven using Gujarati cotton from Surat for both the warp and weft.",
      addInfo:"Calico originated in Calicut, from which the name of the textile came, in South India, now Kerala, during the 11th century, where the cloth was known as 'chaliyan'. It was mentioned in Indian literature by the 12th century when the polymath and writer Hemachandra described calico fabric prints with a lotus design. Calico was woven using Gujarati cotton from Surat for both the warp and weft.."
    },
    {
      id:6,
      image:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/goodnight.jpg?auto=format&q=60&fit=max&w=930",
      name:"Goodnight, Goodnight, Construction Site",
      authorName:"Tom Lichtenheld",
      description:"Everyone’s favorite construction crew joins up with seven new road-building trucks to tackle a big job: creating a brand-new superhighway! Come along for an action-packed day of building, paving, painting—all the things required to make a strong new road that will get everyone home safe and sound and just in time for bed. ",
      addInfo:"Everyone’s favorite construction crew joins up with seven new road-building trucks to tackle a big job: creating a brand-new superhighway! Come along for an action-packed day of building, paving, painting—all the things required to make a strong new road that will get everyone home safe and sound and just in time for bed. "
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
