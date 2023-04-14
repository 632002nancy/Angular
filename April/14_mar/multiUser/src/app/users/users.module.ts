import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProductsComponent } from './products/products.component';
import { FacilitiesComponent } from './facilities/facilities.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }
