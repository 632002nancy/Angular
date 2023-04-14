import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = 
[
  { path: '', component: UsersComponent },
  { path: 'users/facilities', component: FacilitiesComponent },
  { path: 'users/products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
