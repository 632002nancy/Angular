import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplaysRoutingModule } from './displays-routing.module';
import { DisplaysComponent } from './displays/displays.component';


@NgModule({
  declarations: [
    DisplaysComponent
  ],
  imports: [
    CommonModule,
    DisplaysRoutingModule
  ]
})
export class DisplaysModule { }
