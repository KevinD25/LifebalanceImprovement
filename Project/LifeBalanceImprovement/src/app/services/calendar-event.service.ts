import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {

  constructor() { }
}


export interface IEvent {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  label: string;
  // description etc
}
