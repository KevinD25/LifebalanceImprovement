import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  eventSource = [];

  view = 'day';
  calendar = {
    mode: this.view,
    currentDate: new Date(),
  };
  selectedDate = new Date();
  titleEvent: string;
  firstTime: string = '';
  lastTime: string = '';
  fullDay: boolean =  false;
  addEvent: boolean;

  constructor(private db: AngularFirestore) {
    this.addEvent = false;
    this.db.collection(`Events`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        console.log(event);
        this.eventSource.push(event);
      });
    });
   }

  ngOnInit() {
  }

  ViewChanged() {
    this.calendar.mode = this.view;
  }

  addNewEvent() {
    let now = this.selectedDate;
    let start = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    let end = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    if (this.fullDay){
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    } else {
      let hours = this.firstTime.split(':', 2);
      start.setHours(+hours[0]);
      start.setMinutes(+hours[1]);
      hours = this.lastTime.split(':', 2);
      end.setHours(+hours[0]);
      end.setMinutes(+hours[1]);
    }
    

    let event = {
      title: this.titleEvent,
      startTime: start,
      endTime: end,
      allDay: this.fullDay
    };
    console.log(event);

    this.db.collection(`Events`).add(event);
    this.addEvent = false;
  }

  EventAddButtonPressed(){
    this.addEvent = true;
  }

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

}
