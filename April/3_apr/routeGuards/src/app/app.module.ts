import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookGuardService } from './Service/bookGuard.service';
import { AuthService } from './Service/authorized.service';
import { CanDeactivateGuardService } from './Service/canDEactivateGuard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [BookGuardService,AuthService,CanDeactivateGuardService],    //registring the services
  bootstrap: [AppComponent]
})
export class AppModule {}
