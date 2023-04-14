import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import {FormsModule} from '@angular/forms'
//angular material 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouteService } from '../Services/route.service';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],
  providers:[RouteService],
  exports:[AdminComponent]
})
export class AdminModule { }
