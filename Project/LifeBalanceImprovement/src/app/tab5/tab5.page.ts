import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  public Profileitems: any;

  constructor() {

    this.Profileitems = 
    {
      ImgUrl : "URL",Name : "Kevin", Age : 420,Gender : 'Bum'
    }
  }

}
