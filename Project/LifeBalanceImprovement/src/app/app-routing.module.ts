import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),canLoad: [AuthGuard] },
  { path: 'happy-exer', loadChildren: './tab4/happy-exer/happy-exer.module#HappyExerPageModule', canLoad: [AuthGuard]  },
  { path: 'mindfull-exer', loadChildren: './tab4/mindfull-exer/mindfull-exer.module#MindfullExerPageModule', canLoad: [AuthGuard]  },
  { path: 'psycho-edu', loadChildren: './tab4/psycho-edu/psycho-edu.module#PsychoEduPageModule', canLoad: [AuthGuard]  },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule', canLoad: [AuthGuard]  },
  { path: 'externe-hulp', loadChildren: './tab5/externe-hulp/externe-hulp.module#ExterneHulpPageModule', canLoad: [AuthGuard] },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
