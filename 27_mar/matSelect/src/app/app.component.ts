import { Component, ViewChild } from '@angular/core';
interface cities {
  name: string;
  disabled: boolean;
}
interface routes {
  from: string | null;
  to: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'matSelect';

  source: string | null= null;
  destination: string | null= null;
  
  sourceList: cities[] = [
    { name: 'Delhi', disabled: false },
    { name: 'Kolkata', disabled: false },
    { name: 'Mumbai', disabled: false },
    { name: 'Jaipur', disabled: false },
    { name: 'Pune', disabled: false },
  ];
  destinationList: cities[] = [
    { name: 'Delhi', disabled: false },
    { name: 'Kolkata', disabled: false },
    { name: 'Mumbai', disabled: false },
    { name: 'Jaipur', disabled: false },
    { name: 'Pune', disabled: false },
  ];

  totalRoutes: Array<routes> = [];

  disableDest() {
    console.log(this.source)
    //disabling the current city in destination drop-down
    for (let i = 0; i < this.destinationList.length; i++) {
      if (this.destinationList[i].name === this.source) {
        this.destinationList[i].disabled = true;
      }
    }

    //disable all cities in source if they already exist for same destination
    for (let i = 0; i < this.totalRoutes.length; i++) {
      if (this.totalRoutes[i].from === this.source) {
        for (let j = 0; j < this.destinationList.length; j++) {
          if (this.destinationList[j].name === this.totalRoutes[i].to) {
            this.destinationList[j].disabled = true;
          }
        }
      }
    }
  }

  disableSrc() {
    //disabling the current city in source drop-down
    for (let i = 0; i < this.destinationList.length; i++) {
      if (this.sourceList[i].name === this.destination) {
        this.sourceList[i].disabled = true;
      }
    }

    //disable all cities in source if they already exist for same destination
    for (let i = 0; i < this.totalRoutes.length; i++) {
      if (this.totalRoutes[i].to === this.destination) {
        for (let j = 0; j < this.sourceList.length; j++) {
          if (this.sourceList[j].name === this.totalRoutes[i].from) {
            this.sourceList[j].disabled = true;
          }
        }
      }
    }
  }

  addRoute() {
    let obj: routes = { from: '', to: '' };
    obj = { from: this.source, to: this.destination }
    this.totalRoutes.push(obj);   //adding routes in the totalRoutes array
    console.log(this.totalRoutes);
    
    for (let i = 0; i < this.sourceList.length; i++) {              //enable all the options in both lists when printing is done
      this.sourceList[i].disabled = false;
      this.destinationList[i].disabled = false;
    }

    this.source=null;  //to reset the value in dropdown 
    this.destination=null;
  }

  clearRoute() {
    this.source=null;  //reset drop-down 
    this.destination=null;
    this.totalRoutes=[]; //empty the array
  }

}
