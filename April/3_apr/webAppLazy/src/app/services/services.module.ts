import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

//angular materials
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


//featured modules or shared modules
// import { GoalsModule } from '../goals/goals.module';
// import { AboutUsModule } from '../about-us/about-us.module';
@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatCardModule,
    MatButtonModule,
    // GoalsModule,
    // AboutUsModule
  ],
  exports:[ServicesComponent]
})
export class ServicesModule { }
