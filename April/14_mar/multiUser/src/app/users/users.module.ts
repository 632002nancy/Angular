import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProductsComponent } from './products/products.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RouteService } from '../Services/route.service';

//angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[RouteService],
  exports:[UsersComponent]
})
export class UsersModule { }
