import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

//angular material
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';


import { ServicesModule } from '../services/services.module';
import { GoalsModule } from '../goals/goals.module';
import { AboutUsModule } from '../about-us/about-us.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    ServicesModule,
    GoalsModule,
    AboutUsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
