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
      { expanded: false, Text : "  ",Title : " ", index : 0,PageUrl : '/happy-exer' },
      { expanded: false, Text : "  ",Title : " ", index : 1 ,PageUrl : '/mindfull-exer' },
      { expanded: false, Text : " ",Title : " ",index : 2,PageUrl : '/psycho-edu' }
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
