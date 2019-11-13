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
      {text: "‘Twijfel is niet het tegenovergestelde van geloof, het is een onderdeel van geloof.’ Paul Tillich, Duits theoloog"},
      {text: "Teken een groot vraagteken en schrijf daarin waaraan jij twijfelt. Teken daarna een groot uitroepteken en schrijf daarin waarin jij gelooft."},
      {text: "‘Een vliegtuig stijgt op tegen de wind in, niet met de wind mee.’ Henry Ford, Amerikaans industrieel"},
      {text: "Voel je weerstand tegen iets wat je wilt ondernemen? Bekijk die weerstand als een kracht om je plan door te voeren."},
      {text: "‘De komst van een goede clown bevorder de gezondheid van een stad meer dan twintig ezels beladen met medicijnen.’ Thomas Sydenham, Engels wetenschapper"},
      {text: "Breng vandaag de mensen aan het lachen. En ga goed na welke effecten dit heeft op anderen én op jou."},
      {text: " ‘De drie basis voorwaarden voor geluk zijn: iets hebben om te doen, iets hebben om van te houden en iets hebben om op te hopen.’ Joseph Addison, Engels schrijver"},
      {text: "Focus je vandaag op wat je graag doet, waar je van houdt en wat je hoopt."},
      {text: "‘Gelukkig is hij die leert dragen wat hij niet kan veranderen.’ Friedrich Schiller, Duits schrijver"},
      {text: "Teken een steen en schrijf er een last op die je moet dragen. Teken drie ballonnen aan de steen met woorden die je met de last leren leven, ook al zal de steen daardoor niet van plaats veranderen."},
      {text: "‘Wie heeft ooit beweerd dat we maar één keer geboren worden?’ Jacques Derrida, Frans filosoof"}
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
      this.quotenumber = Math.floor(Math.random() * this.quotes.length);  
      this.quote = this.quotes[this.quotenumber].text;
      console.log(this.quote);
  }

  getCurrentDate(){
    this.currentdaystring = new Date().getDate().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString(); 
    this.currentday = parseInt(this.currentdaystring);
    this.currentday = 15112019;
  }

}
