import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExterneHulpPage } from './externe-hulp.page';

import { ExpandableComponent } from '../../expandable/expandable.component';


const routes: Routes = [
  {
    path: '',
    component: ExterneHulpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExterneHulpPage, ExpandableComponent]
})
export class ExterneHulpPageModule {}
