import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExterneHulpPage } from './externe-hulp.page';

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
  declarations: [ExterneHulpPage]
})
export class ExterneHulpPageModule {}
