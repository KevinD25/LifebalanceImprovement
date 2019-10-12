import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MindfullExerPage } from './mindfull-exer.page';

const routes: Routes = [
  {
    path: '',
    component: MindfullExerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MindfullExerPage]
})
export class MindfullExerPageModule {}
