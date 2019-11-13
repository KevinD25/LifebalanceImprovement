import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthPage } from './auth.page';
const routes = [
    {
        path: '',
        component: AuthPage
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AuthPage]
    })
], AuthPageModule);
export { AuthPageModule };
//# sourceMappingURL=auth.module.js.map