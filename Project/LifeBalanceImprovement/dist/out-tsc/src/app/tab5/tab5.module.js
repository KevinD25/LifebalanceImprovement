import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: Tab5Page }])
        ],
        declarations: [Tab5Page]
    })
], Tab5PageModule);
export { Tab5PageModule };
//# sourceMappingURL=tab5.module.js.map