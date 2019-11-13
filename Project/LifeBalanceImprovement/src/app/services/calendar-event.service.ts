import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  
  protected selectedDate = new Date();
  protected titleEvent: string;
  protected firstTime: string = '';
  protected lastTime: string = '';
  protected fullDay: boolean = false;
  protected eventSelected: boolean = false;
  protected addEvent: boolean;
  protected label : string = '';

  constructor(private db: AngularFirestore) { }

  addNewEvent() {
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
      allDay: this.fullDay,
      label: this.label,
      userId: 'uP2Bn2DDvYkodebwwej8'
    };
    this.db.collection(`Events`).add(event);
    this.titleEvent = '';
    this.fullDay = false;
    this.addEvent = false;
  }

  timeSelected(selectedTime: Date){
    this.selectedDate = selectedTime;
    if (!this.eventSelected) {
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
      return true;
    } else {
      return false;
    }
  }

  setAddEvent(value: boolean) {
    this.addEvent = value;
  }

  getAddEvent() {
    return this.addEvent;
  }
}


export interface IEvent {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  label: string;
  userId: string;
  // description etc
}
