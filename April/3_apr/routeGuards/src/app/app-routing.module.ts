import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookGuardService } from './Service/bookGuard.service';
import { CanDeactivateGuardService } from './Service/canDEactivateGuard.service';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
  //  canActivateChild:[BookGuardService]       //if this route has children routes then this canActivateChild will be activated
 },
  { path: 'book',canDeactivate:[CanDeactivateGuardService], loadChildren: () => import('./book/book.module').then(m => m.BookModule) , }];
  // { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) , canActivate:[BookGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
