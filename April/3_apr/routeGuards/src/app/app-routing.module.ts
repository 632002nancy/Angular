import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }, { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
