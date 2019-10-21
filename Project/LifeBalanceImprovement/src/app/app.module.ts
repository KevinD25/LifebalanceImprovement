import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CustomDateFormatterService } from './calendar/services/custom-date-formatter.service';
import { CustomEventTitleFormatterService } from './calendar/services/custom-event-title-formatter.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CalendarModule.forRoot({
    provide: DateAdapter, useFactory: adapterFactory
  }), CalendarWeekHoursViewModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CustomDateFormatterService,
    CustomEventTitleFormatterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
