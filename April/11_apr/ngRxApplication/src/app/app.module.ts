import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     StoreModule.forRoot(reducers, { metaReducers }),  //To register the global Store within your application, use the StoreModule.forRoot(), you register root states that always need to be available to all areas of your application immediately
    //  isDevMode() ? StoreDevtoolsModule.instrument() : [],
     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
     EffectsModule.forRoot([UserEffects])  //name of the reducer for root state of the application.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
