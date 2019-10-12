import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PsychoEduPage } from './psycho-edu.page';

const routes: Routes = [
  {
    path: '',
    component: PsychoEduPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PsychoEduPage]
})
export class PsychoEduPageModule {}
