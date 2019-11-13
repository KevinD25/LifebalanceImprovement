import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExterneHulpPage } from './externe-hulp.page';
import { ExpandableComponent } from '../../Items/expandable/expandable.component';
const routes = [
    {
        path: '',
        component: ExterneHulpPage
    }
];
let ExterneHulpPageModule = class ExterneHulpPageModule {
};
ExterneHulpPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ExterneHulpPage, ExpandableComponent]
    })
], ExterneHulpPageModule);
export { ExterneHulpPageModule };
//# sourceMappingURL=externe-hulp.module.js.map