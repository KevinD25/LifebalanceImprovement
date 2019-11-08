import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CalendarService } from '../services/calendar.service';
import { CalendarEventService } from '../services/calendar-event.service';

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

  constructor(private db: AngularFirestore, protected calendarService: CalendarService, protected calendarEventService: CalendarEventService) {
    this.calendarEventService.setAddEvent(false);
    this.onViewTitleChanged(calendarService.getTitle());
   }

  ngOnInit() {
  }

  ViewChanged() {
    this.calendarService.setView(this.view);
  }

  cancelCreatingEvent(){
    this.calendarEventService.setAddEvent(false);
    this.hideOverlayTrue();
  }

  addNewEvent() {
    this.calendarEventService.addNewEvent();
    this.hideOverlayTrue();
  }

  EventAddButtonPressed(){
    this.calendarEventService.setAddEvent(true);
    this.hideOverlayFalse();
  }

  onViewTitleChanged(title) {
    let dateTitle = title.split(' ', 4);
    let start = new Date();
    let text = start.getDate();
    
    this.pageTitle = text + ' ' + dateTitle[0] + ' ' + dateTitle[2];
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    this.eventSelected = true;
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
    const temp = this.calendarEventService.timeSelected(this.selectedDate);
    if (temp){
      this.EventAddButtonPressed();
    }
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  private hideOverlayFalse() {
    this.overlayHidden = false;
  }

  private hideOverlayTrue(){
    this.overlayHidden = true;
  }
}
