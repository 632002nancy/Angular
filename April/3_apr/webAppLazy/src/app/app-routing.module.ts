import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },   //go and find HomeModule and display default file for homeModule
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },   //go and find HomeModule and display default file for homeModule
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'goals', loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule) }, 
  { path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
