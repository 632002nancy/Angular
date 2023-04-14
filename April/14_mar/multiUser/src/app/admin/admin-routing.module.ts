import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { RouteService } from '../Services/route.service';

const routes: Routes = 
[
  {path: '', component: AdminComponent},
  {path:'admin/products', component:ProductsComponent ,canActivate:[RouteService]},
  {path:'admin/customers', component:CustomersComponent,canActivate:[RouteService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
