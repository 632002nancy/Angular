import { Component,ViewChild } from '@angular/core';
import { NgModel } from "@angular/forms";
interface cities{
  name:string;
  disabled:boolean;
}

interface routes{
  from:string;
  to:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'matSelect';

  source:string='';
  destination:string='';

  obj:routes={from:'',to:''};
  
  sourceList: cities[] = [
    { name: '', disabled: true},
    { name: 'Delhi', disabled: false},
    { name: 'Kolkata', disabled: false},
    { name: 'Mumbai', disabled: false},
    { name: 'Jaipur', disabled: false},
    { name: 'Pune', disabled: false},
  ];
  destinationList: cities[] = [
    { name: '', disabled: true},
    { name: 'Delhi', disabled: false},
    { name: 'Kolkata', disabled: false},
    { name: 'Mumbai', disabled: false},
    { name: 'Jaipur', disabled: false},
    { name: 'Pune', disabled: false},
  ];

  totalRoutes:Array<routes>=[];

  disableDest() { 
    console.log(this.source);
    //disabling the current city in destination drop-down
    for (let i = 0; i < this.destinationList.length; i++) {
      if(this.destinationList[i].name===this.source){
        this.destinationList[i].disabled=true;
      }     
    }

    for (let i = 0; i < this.totalRoutes.length; i++) {
      if(this.totalRoutes[i].from===this.source){
          for (let j = 0; j < this.destinationList.length; j++) {
            if(this.destinationList[j].name===this.totalRoutes[i].to){
              this.destinationList[j].disabled=true;
            }
          }
        }
    }
  }

  disableSrc() { 
    console.log(this.destination);
     //disabling the current city in source drop-down
    for (let i = 0; i < this.destinationList.length; i++) {
      if(this.sourceList[i].name===this.destination){
        this.sourceList[i].disabled=true;
      }     
    }

    for (let i = 0; i < this.totalRoutes.length; i++) {
      if(this.totalRoutes[i].to===this.destination){
          for (let j = 0; j < this.sourceList.length; j++) {
            if(this.sourceList[j].name===this.totalRoutes[i].from){
              this.sourceList[j].disabled=true;
            }
          }
        }
    }
  }

  addRoute(){
    console.log(this.totalRoutes)
    this.obj={from:this.source, to:this.destination}
    this.totalRoutes.push(this.obj);   //adding routes in the totalRoutes array
    console.log(this.totalRoutes);

    for(let i=0;i<this.sourceList.length;i++){              //enable all the options in both lists when printing is done
      this.sourceList[i].disabled=false;
      this.destinationList[i].disabled=false;
    }

  }

  clearRoute(){
    location.reload();
  }

}
