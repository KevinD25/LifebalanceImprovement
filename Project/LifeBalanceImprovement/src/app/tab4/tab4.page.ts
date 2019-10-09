import { Component } from '@angular/core';
import { ExpandableComponent } from '../Items/expandable/expandable.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public items: any = [];
  

  constructor() {
    this.items = [
      { expanded: false, templateUrl : "testing 123456789",plab : "Title1", index : 0 },
      { expanded: false, templateUrl : "testing testing",plab : "Title2", index : 1 },
      { expanded: false, templateUrl : " 123456789",plab : "Title3",index : 2 }
    ];
    
    
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
  pressButton(item):void
  {
  
    console.log(item.index);
  }
}
