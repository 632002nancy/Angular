import { Component } from '@angular/core';
export interface IUser{
  name:string;
  age:number;
  gender:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRxApplication';
}
