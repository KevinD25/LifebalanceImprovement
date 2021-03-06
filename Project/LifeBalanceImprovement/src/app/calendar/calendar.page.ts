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
  firstTime = new Date();
  lastTime = new Date();
  fullDay: boolean =  false;
  addEvent: boolean;
  eventSelected: boolean = false;
  addEventOverlayHidden: boolean = true;
  eventOverlayHidden: boolean = true;
  hasDateBeenPicked: boolean = false;
  testDate: string;

  constructor(private db: AngularFirestore, public calendarService: CalendarService, public calendarEventService: CalendarEventService) {
    this.calendarEventService.setAddEvent(false);
    this.hideAddEventOverlayTrue();
    this.onTitleChanged(calendarService.getTitle(), this.selectedDate);
    console.log("oi oi:" + this.pageTitle);
    this.testDate = new Date().toISOString().split('T')[0];
   }

  ngOnInit() {
  }

  ViewChanged() {
    this.calendarService.setView(this.view);
    this.calendarService.getEventsFromDatabase();
    console.log('1');
  }

  cancelCreatingEvent(){
    this.calendarEventService.setAddEvent(false);
    this.hideAddEventOverlayTrue();
    console.log('2');
  }

  cancelViewingEvent() {
    this.hideEventOverlay();
    this.calendarService.setSeeEventFalse();
    this.eventSelected = false;
    console.log('2,5');
  }

  addNewEvent() {
    console.log(this.calendarEventService.firstTime);
    console.log(this.calendarEventService.lastTime);
    this.calendarEventService.addNewEvent(this.hasDateBeenPicked);
    this.hideAddEventOverlayTrue();
    console.log('3');
  }

  EventAddButtonPressed(type: boolean) {
    this.hasDateBeenPicked = type;
    if (!this.hasDateBeenPicked) {
      this.calendarEventService.setDates(this.selectedDate);
    }
    this.calendarEventService.setAddEvent(true);
    this.hideAddEventOverlayFalse();
    console.log('4');
  }

  onViewTitleChanged(title) {
    this.onTitleChanged(title, this.calendarService.calendar.currentDate);
    console.log('5');
  }

  onTitleChanged(title: string, date: Date) {
    let text = date.getDate();
    let dateTitle = title.split(' ');
    if (this.calendarService.getView() === 'day'){
      this.pageTitle = text + ' ' + dateTitle[0] + ' ' + dateTitle[2];
    } else if (this.calendarService.getView() === 'week') {
      this.pageTitle = title.toLocaleLowerCase();
    } else if (this.calendarService.getView() === 'month') {
      this.pageTitle = title;
    }
  }

  onEventSelected(event) {
    // console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    this.eventSelected = true;
    this.calendarService.setSeeEventTrue();
    this.calendarService.getEventData(event);
    if (this.calendarService.seeEventData != null) {
      this.calendarService.setDateRight(this.calendarService.seeEventData.startTime, this.calendarService.seeEventData.endTime, this.pageTitle);
      this.showEventOverlay();
    }
    console.log('6');
  }

  onTimeSelected(ev) {
    if (!this.eventSelected) {
      console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
      this.selectedDate = ev.selectedTime;
      const temp = this.calendarEventService.timeSelected(this.selectedDate);
      if (temp){
        this.EventAddButtonPressed(true);
      }
      console.log('7');
    }
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
    this.calendarService.calendar.currentDate = event;
    this.calendarService.getEventsFromDatabase();
    console.log('8');
    
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    console.log('9');
  }

  reloadSource(firstTime: Date, lastTime: Date){
    console.log('11');
  }

  private hideAddEventOverlayFalse() {
    this.addEventOverlayHidden = false;
    console.log('12');
  }

  private hideAddEventOverlayTrue() {
    this.addEventOverlayHidden = true;
    console.log('13');
  }

  private hideEventOverlay() {
    this.eventOverlayHidden = true;
  }

  private showEventOverlay() {
    this.eventOverlayHidden = false;
  }
  
}
