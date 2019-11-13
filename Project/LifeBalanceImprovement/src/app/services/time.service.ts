import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private selectedDate: string;

  constructor() { }

  getSelectedDate() {
    return this.selectedDate;
  }

  timeSelected(selectedTime: Date){
    if (selectedTime.getHours() < 10) {
      if (selectedTime.getMinutes() < 10) {
        this.selectedDate = '0' + selectedTime.getHours().toString() + ':0' + selectedTime.getMinutes().toString();
      } else {
        this.selectedDate = '0' + selectedTime.getHours().toString() + ':' + selectedTime.getMinutes().toString();
      }
    } else if (selectedTime.getHours() >= 10){
      if (selectedTime.getMinutes() < 10) {
        this.selectedDate = selectedTime.getHours().toString() + ':0' + selectedTime.getMinutes().toString();
      } else {
        this.selectedDate = selectedTime.getHours().toString() + ':' + selectedTime.getMinutes().toString();
      }
    }
  }
}
