import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MindfullExerPage } from './mindfull-exer.page';
const routes = [
    {
        path: '',
        component: MindfullExerPage
    }
];
let MindfullExerPageModule = class MindfullExerPageModule {
};
MindfullExerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MindfullExerPage]
    })
], MindfullExerPageModule);
export { MindfullExerPageModule };
//# sourceMappingURL=mindfull-exer.module.js.map