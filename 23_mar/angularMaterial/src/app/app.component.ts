import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

interface genders {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  panelOpenState = false;
  title = 'angularMaterial';

  gender: genders[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'},
  ];
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(name:string){
    this._snackBar.open(name,'submitted');

  }

}
