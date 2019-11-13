import { Component, OnInit } from '@angular/core';
import { ExpandableComponent} from '../../expandable/expandable.component';
import { strictEqual } from 'assert';



@Component({
  selector: 'app-externe-hulp',
  templateUrl: './externe-hulp.page.html',
  styleUrls: ['./externe-hulp.page.scss'],
})
export class ExterneHulpPage implements OnInit {

  public items: any = [];
  //public logos: any = [];
  public sitePath : string;
  public chatPath : string;
  public mailPath : string;
  public phonePath : string;
  public forumPath : string;

  constructor() { 

   this.sitePath = "/assets/img/site.png";
   this.chatPath = "/assets/img/chat.png";
   this.mailPath = "/assets/img/mail.png";
   this.phonePath = "/assets/img/phone.png";
   this.forumPath = "/assets/img/forum.png";

   /* this.logos = [
      { sitePath : "/assets/img/site.png", chatPath : "/assets/img/chat.png", mailPath : "/assets/img/mail.png", phonePath : "/assets/img/phone.png", forumPath : "/assets/img/forum.png"},
    ]*/

    this.items = [
      { expanded: false, Text : "Awel luistert naar kinderen en jongeren.",Title : "Awel", index : 0, Logo : "/assets/img/awel.png", site : "https://awel.be/", chat : "Chat met AWEL : Ma-za 18-22u (https://awel.be/babbel#chat)", mail: "Mail (brievenbus@awel.be)", phone: "Gratis en anoniem op 102. Ma-za: 16-22u", forum : "Bezoek het forum van AWEL (https://awel.be/forum)"},
      { expanded: false, Text : "Gaan de dingen niet zoals je wil? Het JAC is er voor jou.",Title : "JAC", index : 1, Logo : "/assets/img/jac.png", site: "https://www.caw.be/jac/", chat : "Chat met JAC: Ma-vr 13-19 u  (https://www.caw.be/jac/contacteer-ons/chat/)", mail: "Mail met JAC (https://www.caw.be/jac/contacteer-ons/mail/)"},
      { expanded: false, Text : "Praten over hoe je je voelt op school of thuis? Vragen over je studies, je gezondheid of het medisch onderzoek? Je kan gratis en anoniem bij het CLB terecht voor info of begeleiding.",Title : "CLB",index : 2, Logo : "/assets/img/clb.jpg", site : "https://www.onderwijskiezer.be/v2/clb/clb_zoek.php", chat :" Chat met CLB : Ma/di/do 17-21u, Wo 14-21u (https://www.clbchat.be)"},
      { expanded: false, Text : "In een OverKop-huis kan je als jongere gewoon binnen en buiten lopen en allerlei leuke activiteiten doen. Het is een veilige plek waar je ook een luisterend oor vindt en beroep kan doen op professionele therapeutische hulp.",Title : "Overkop", index : 3, Logo : "/assets/img/overkop.png", site:"https://overkop.be", chat : "Chat met overkop https://overkop.be/chat", mail :"Mail met overkop info@overkop.be"},
      { expanded: false, Text : "Therapeutische begeleiding • jongeren 10 – 20 jaar • anoniem • onmiddellijk • kortdurend • gratis • met of zonder afspraak",Title : "Tejo", index : 4, Logo : "/assets/img/tejo.jpg", site :"https://tejo.be/"},
      { expanded: false, Text : "Praat bij Tele-Onthaal over wat jou bezighoudt. Soms moet je al je moed bijeen rapen voor een gesprek. Of vraag je je af of zo’n gesprek wel veilig is. Om het voor jou zo makkelijk mogelijk te maken om te praten, houden we de drempel zo laag mogelijk.",Title : "Teleonthaal", index : 5, Logo : "/assets/img/teleonthaal.png", site: "https://www.tele-onthaal.be/", phone : "Bel 106. 24u op 24, 7d op 7.", chat : "Chat elke avond en woens-en zondagnamiddag"},
      { expanded: false, Text : "Dringend nood aan een gesprek?",Title : "Zelfmoord1813", index : 6, Logo : "/assets/img/zelfmoordlijn.jpg", site : "https://www.zelfmoord1813.be/", phone : "Bel nu 1813. 24/7 beschikbaar. ", chat : "Chat: elke dag van 18u30 – 22u.", mail : "Antwoord binnen 5 werkdagen https://email.zelfmoord1813.be/"},
    ];
  }

  ngOnInit() {
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
