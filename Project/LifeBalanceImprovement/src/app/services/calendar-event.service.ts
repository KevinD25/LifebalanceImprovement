import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { take, switchMap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  
  protected selectedDate = new Date();
  protected titleEvent: string;
  public firstTime: string = '';
  public lastTime: string = '';
  protected fullDay: boolean = false;
  protected eventSelected: boolean = false;
  protected addEvent: boolean;
  private currentUserId: string;

  constructor(private db: AngularFirestore, private authSvc: AuthService) {
    this.getUserId();
    console.log(this.currentUserId);
    
   }

  addNewEvent(checker: boolean) {
    let start = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    let end = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
      
    if (this.fullDay){
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    } else if (checker) {
      let time = this.firstTime.split(':', 2);
      start.setHours(+time[0]);
      start.setMinutes(+time[1]);
      time = this.lastTime.split(':', 2);
      end.setHours(+time[0]);
      end.setMinutes(+time[1]);
    } else {
      this.firstTime = this.firstTime.replace('T', ':');
      this.lastTime = this.lastTime.replace('T', ':');
      this.firstTime = this.firstTime.replace('-', ':');
      this.lastTime = this.lastTime.replace('-', ':');
      let time = this.firstTime.split(':', 2);
      console.log(time);
      start.setHours(+time[0]);
      start.setMinutes(+time[1]);
      time = this.lastTime.split(':', 2);
      end.setHours(+time[0]);
      end.setMinutes(+time[1]);
      console.log(this.firstTime);
    }

    console.log(this.currentUserId);
    this.currentUserId = this.currentUserId.replace('"', '');
    console.log(this.currentUserId);
    let event = {
      title: this.titleEvent,
      startTime: start,
      endTime: end,
      allDay: this.fullDay,
      userId: this.currentUserId,
      details: ''
    };
    this.db.collection(`Events`).add(event);
    this.titleEvent = '';
    this.fullDay = false;
    this.addEvent = false;
  }

  timeSelected(selectedTime: Date) {
    this.firstTime = '';
    this.lastTime = '';
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
      } else if (this.selectedDate.getHours() + 1 >= 10) {
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

  getUserId(): string {
    // Plugins.Storage.get({key: 'authData'}).then( key => {
    //   let temp = key.value;
    //   temp = temp.replace(':', ',');
    //   console.log(temp);
    //   let newString = temp.split(',');
    //   this.currentUserId = newString[1].toString();
    //   return newString[1].toString();
    // });
    // return null;
    this.authSvc.userId.pipe( take(1)).subscribe(userId => { this.currentUserId = userId});
  }

  getAddEvent() {
    return this.addEvent;
  }

  setDates(date: Date) {
    this.firstTime = date.getDate().toString();
    this.lastTime = date.getDate().toString();
    console.log("dit is een testje: " + this.lastTime);
    
  }
}


export interface IEvent {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  label: string;
  details: string;
  userId: string;
  // description etc
}
