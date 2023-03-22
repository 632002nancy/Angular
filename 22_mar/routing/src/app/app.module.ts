import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

// Routes is the array of Route object 
const appRoute: Routes = [
  {path: '', component: HomeComponent},   //defining route for root url (default route)  here url- http://localhost:4200/
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect the path to home when url is root url and path is match to the full url, here url-http://localhost:4200/home
  { path: 'home', component: HomeComponent },   //when user enter root url/home render view template of home component
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },  //wildcard routes if no route is matched it will match this route, this should be at last
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
