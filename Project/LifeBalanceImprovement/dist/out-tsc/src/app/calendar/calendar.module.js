import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarPage } from './calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
const routes = [
    {
        path: '',
        component: CalendarPage
    }
];
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            NgCalendarModule
        ],
        declarations: [CalendarPage]
    })
], CalendarPageModule);
export { CalendarPageModule };
//# sourceMappingURL=calendar.module.js.map