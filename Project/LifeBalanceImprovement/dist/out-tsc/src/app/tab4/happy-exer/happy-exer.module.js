import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HappyExerPage } from './happy-exer.page';
const routes = [
    {
        path: '',
        component: HappyExerPage
    }
];
let HappyExerPageModule = class HappyExerPageModule {
};
HappyExerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HappyExerPage]
    })
], HappyExerPageModule);
export { HappyExerPageModule };
//# sourceMappingURL=happy-exer.module.js.map