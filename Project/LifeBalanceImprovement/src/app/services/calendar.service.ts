import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl-BE';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // Calendar necessities
  private view = 'day';
  protected eventSource = [];
  protected noEventsLabel = 'Niets gepland';
  protected locale = registerLocaleData(localeNl);

  protected calendar = {
    mode: this.view,
    currentDate: new Date()
  };

  // boolean types
  protected addEvent: boolean;

  constructor(private db: AngularFirestore) {
    // Constructor for variables
    this.setBooleans();

    
    // Create and initiate calendar
    db.collection('Events').snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap =>{
        let event: any = snap.payload.doc.data();
        event.id =  snap.payload.doc.id;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        console.log(event.startTime);
        event.label = '';
        if (this.calendar.mode === 'day'){
          if (event.startTime.getDate() === this.calendar.currentDate.getDate()) {
            this.eventSource.push(event);
            console.log('succes');
          }
        } else  {
          this.eventSource.push(event);
        }
      });
    });
  }

  setAddEvent(value: boolean) {
    this.addEvent = value;
  }

  getAddEvent() {
    return this.addEvent;
  }

  setEvent(event: any){
    this.db.collection('Events').add(event);
    this.addEvent = false;
  }

  getTitle(){
    return this.calendar.mode.toString();
  }

  private setBooleans() {
    this.addEvent = false;
  }

  setView(input: string){
    this.calendar.mode = input;
  }

  getView(){
    return this.view;
  }
}
