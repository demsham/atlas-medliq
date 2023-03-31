import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WawbComponent } from './maps/m1wawb/wawb.component';
import { TroubledwatersComponent } from './maps/m3troubledwaters/troubledwaters.component';

const routes: Routes = [
  {path: 'water-above-water-below', component: WawbComponent},
  {path: 'troubled-waters-the-nile-conflict', component: TroubledwatersComponent},
  {path: 'm6', 
    loadChildren: () => import('./maps/m6/m6.module').then(m => m.M6Module)
  },
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
