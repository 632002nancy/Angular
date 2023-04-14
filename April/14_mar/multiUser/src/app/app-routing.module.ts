import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouteService } from './Services/route.service';

const routes: Routes =
  [
   { path: '', component: WelcomeComponent },
   { path: 'navbar', component: NavbarComponent },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,},
   { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
