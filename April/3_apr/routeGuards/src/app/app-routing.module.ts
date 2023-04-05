import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceResolved } from './Service/serviceResolved.service';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
     resolve:{services:ServiceResolved}  //here services will have data returned by Service
  //  canActivateChild:[BookGuardService]       //if this route has children routes then this canActivateChild will be activated
 },
  { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) }];
  // { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) , canActivate:[BookGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
