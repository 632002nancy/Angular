import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//featured modules or shared modules
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { GoalsModule } from './goals/goals.module';
import { AboutUsModule } from './about-us/about-us.module';


//angular material
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HomeModule,
    ServicesModule,
    GoalsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
