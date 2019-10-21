import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'happy-exer', loadChildren: './tab4/happy-exer/happy-exer.module#HappyExerPageModule' },
  { path: 'mindfull-exer', loadChildren: './tab4/mindfull-exer/mindfull-exer.module#MindfullExerPageModule' },
  { path: 'psycho-edu', loadChildren: './tab4/psycho-edu/psycho-edu.module#PsychoEduPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
