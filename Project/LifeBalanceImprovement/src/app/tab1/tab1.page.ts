import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public quotes : any = [];
  quote : string;
  currentday : number;
  currentdaystring: string;
  quotenumber : number;

  constructor() {

    this.quotes = [
      {text: "‘Dit is wat ik heb geleerd: Dat iedereen een talent heeft, origineel is en iets belangrijks te zeggen heeft.’ Brenda Ueland, Amerikaans schrijfster"},
      {text : "Bekijk vandaag de anderen op deze manier: ze hebben een talent en iets belangrijks te zeggen. Ontdek het."},
      {text: "‘Ik wil alles worden wat ik kan worden.’ Katherine Mansfield, Nieuw-Zeelands schrijfster"},
      {text : "Ga vandaag op zoek naar dat ene talent van je dat nog wat verborgen zit. Geef het een kans om te groeien."},
      {text: "‘Twijfel is niet het tegenovergestelde van geloof, het is een onderdeel van geloof.’ Paul Tillich, Duits theoloog"}
    ]

    this.getCurrentDate();
    console.log(this.currentday);
    console.log(this.quotes.length);
    this.generateQotd();
    console.log(this.quotenumber);
  }

   
  
  //Random tip of the day based on day. Use day to generate N number to show specific qotd that changes every day.
  generateQotd(){
      this.quotenumber = this.currentday % this.quotes.length;
      this.quote = this.quotes[this.quotenumber].text;
      console.log(this.quote);
  }

  getCurrentDate(){
    this.currentdaystring = new Date().getDate().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString(); 
    this.currentday = parseInt(this.currentdaystring);
    this.currentday = 15112019;
  }

}
