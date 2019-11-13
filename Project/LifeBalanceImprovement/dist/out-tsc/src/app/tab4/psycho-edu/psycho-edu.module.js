import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PsychoEduPage } from './psycho-edu.page';
const routes = [
    {
        path: '',
        component: PsychoEduPage
    }
];
let PsychoEduPageModule = class PsychoEduPageModule {
};
PsychoEduPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PsychoEduPage]
    })
], PsychoEduPageModule);
export { PsychoEduPageModule };
//# sourceMappingURL=psycho-edu.module.js.map