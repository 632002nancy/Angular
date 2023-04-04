import { Component } from '@angular/core';
import { AuthService } from './Service/authorized.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeGuards';
  constructor(private authServive:AuthService){}

  login(){
    this.authServive.login();
  }
  logout(){
    this.authServive.logout();
  }
}
