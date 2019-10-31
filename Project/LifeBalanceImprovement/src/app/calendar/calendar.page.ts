import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  pageTitle: string;
  view = 'day';
  selectedDate = new Date();
  titleEvent: string;
  firstTime: string = '';
  lastTime: string = '';
  fullDay: boolean =  false;
  addEvent: boolean;
  eventSelected: boolean = false;

  overlayHidden: boolean = true;

  constructor(private db: AngularFirestore, protected service: CalendarService) {
    this.service.setAddEvent(false);
    this.onViewTitleChanged(service.getTitle());
   }

  ngOnInit() {
  }

  ViewChanged() {
    this.service.setView(this.view);
    this.service.setAddEvent(false);
  }

  cancelCreatingEvent(){
    this.service.setAddEvent(false);
    this.overlayHidden = true;
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

    this.db.collection(`Events`).add(event);
    this.service.setAddEvent(false);
  }

  EventAddButtonPressed(){
    this.service.setAddEvent(true);
    this.hideOverlay();
  }

  onViewTitleChanged(title) {
    console.log(title);
    this.pageTitle = title;
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    this.eventSelected = true;
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
    if (!this.eventSelected){
      if (this.selectedDate.getHours() < 10) {
        if (this.selectedDate.getMinutes() < 10) {
          this.firstTime = '0' + this.selectedDate.getHours().toString() + ':0' + this.selectedDate.getMinutes().toString();
        } else {
          this.firstTime = '0' + this.selectedDate.getHours().toString() + ':' + this.selectedDate.getMinutes().toString();
        }
      } else if (this.selectedDate.getHours() >= 10){
        if (this.selectedDate.getMinutes() < 10) {
          this.firstTime = this.selectedDate.getHours().toString() + ':0' + this.selectedDate.getMinutes().toString();
        } else {
          this.firstTime = this.selectedDate.getHours().toString() + ':' + this.selectedDate.getMinutes().toString();
        }
      }
      if (this.selectedDate.getHours() + 1 < 10) {
        if (this.selectedDate.getMinutes() < 10) {
          this.lastTime = '0' + (this.selectedDate.getHours() + 1).toString() + ':0' + this.selectedDate.getMinutes().toString();
        } else {
          this.lastTime = '0' + (this.selectedDate.getHours() + 1).toString() + ':' + this.selectedDate.getMinutes().toString();
        }
      } else if (this.selectedDate.getHours() >= 10){
        if (this.selectedDate.getMinutes() < 10) {
          this.lastTime = (this.selectedDate.getHours() + 1).toString() + ':0' + this.selectedDate.getMinutes().toString();
        } else {
          this.lastTime = (this.selectedDate.getHours() + 1).toString() + ':' + this.selectedDate.getMinutes().toString();
        }
      }
      this.EventAddButtonPressed();
    }
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  public hideOverlay() {
    this.overlayHidden = false;
  }
}
