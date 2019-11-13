import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl-BE';
import { IEvent } from './calendar-event.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // Calendar necessities
  private view = 'day';
  protected eventSource = [];
  protected noEventsLabel = 'Niets gepland';
  protected locale = registerLocaleData(localeNl);
  protected startTime: string;
  protected endTime: string;
  public disabled = [];
  public seeEventData: IEvent;

  public calendar = {
    mode: this.view,
    currentDate: new Date(),
    startingDayWeek : 1,
    startingDayMonth : 1
  };

  // boolean types
  protected addEvent: boolean;
  protected seeEvent: boolean;

  constructor(private db: AngularFirestore, private timeSvc: TimeService) {
    // Constructor for variables
    this.setBooleans();

    // Initialize the events
    this.getEventsFromDatabase();
  }

  getEventsFromDatabase() {
    this.db.collection('Events').snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event: any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        if (event.userId === 'uP2Bn2DDvYkodebwwej8') {
          if (this.calendar.mode === 'day') {
            if (event.startTime.getDate() === this.calendar.currentDate.getDate()) {
              this.eventSource.push(event);
            }
          } else {
            this.eventSource.push(event);
          }
        }
      });
    });
  }

  setSeeEventTrue() {
    this.seeEvent = true;
  }

  setSeeEventFalse() {
    this.seeEvent = false;
  }

  getEventData(event) {
    this.startTime = '';
    this.endTime = '';
    this.eventSource.forEach(ev => {
      if (ev.startTime <= event.startTime && ev.endTime >= event.endTime) {
        this.seeEventData = ev;
        this.startTime = ev.startTime.toString();
        this.endTime = ev.endTime.toString();
        this.seeEvent = true;
      }
    });
  }

  setDateRight(firstDate: Date, lastDate: Date, title: string) {
    this.timeSvc.timeSelected(firstDate);
    const first = this.timeSvc.getSelectedDate();
    this.timeSvc.timeSelected(lastDate);
    const last = this.timeSvc.getSelectedDate();
    const titleArray = title.split(' ');
    this.startTime = firstDate.getDate() + ' ' + titleArray[1] + ' ' + titleArray[2] + ' om ' + first;
    this.endTime = lastDate.getDate() + ' ' + titleArray[1] + ' ' + titleArray[2] + ' om ' + last;
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
    this.seeEvent = false;
  }

  setView(input: string){
    this.calendar.mode = input;
  }

  getView(){
    return this.view;
  }
}
