import { Component, OnInit } from '@angular/core';
import { ExpandableComponent } from '../../Items/expandable/expandable.component';



@Component({
  selector: 'app-externe-hulp',
  templateUrl: './externe-hulp.page.html',
  styleUrls: ['./externe-hulp.page.scss'],
})
export class ExterneHulpPage implements OnInit {

  public items: any = [];

  constructor() { 

    this.items = [
      { expanded: false, Text : "Awel luistert naar kinderen en jongeren.",Title : "Awel", index : 0, Logo : "logo-awel"},
      { expanded: false, Text : "Gaan de dingen niet zoals je wil? Het JAC is er voor jou.",Title : "JAC", index : 1, Logo : "logo-jac" },
      { expanded: false, Text : "Praten over hoe je je voelt op school of thuis? Vragen over je studies, je gezondheid of het medisch onderzoek? Je kan gratis en anoniem bij het CLB terecht voor info of begeleiding.",Title : "CLB",index : 2, Logo : "logo-clb" },
      { expanded: false, Text : "In een OverKop-huis kan je als jongere gewoon binnen en buiten lopen en allerlei leuke activiteiten doen. Het is een veilige plek waar je ook een luisterend oor vindt en beroep kan doen op professionele therapeutische hulp.",Title : "Overkop", index : 3, Logo : "logo-overkop" },
      { expanded: false, Text : "Therapeutische begeleiding • jongeren 10 – 20 jaar • anoniem • onmiddellijk • kortdurend • gratis • met of zonder afspraak",Title : "Tejo", index : 4, Logo : "logo-tejo" },
      { expanded: false, Text : "Praat bij Tele-Onthaal over wat jou bezighoudt. Soms moet je al je moed bijeen rapen voor een gesprek. Of vraag je je af of zo’n gesprek wel veilig is. Om het voor jou zo makkelijk mogelijk te maken om te praten, houden we de drempel zo laag mogelijk.",Title : "Teleonthaal", index : 5, Logo : "logo-teleonthaal" },
      { expanded: false, Text : "Dringend nood aan een gesprek?",Title : "Zelfmoord1813", index : 6, Logo : "logo-zelfmoordlijn" },
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
