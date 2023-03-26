import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srcDest';
  @ViewChild('sourceSelect') srcOption!: ElementRef;
  @ViewChild('destSelect') destOption!: ElementRef;


  src:string='';
  dest:string='';
  printSource:string='';
  printDest:string='';
  selectedSrc:number=0;
  selectedDest:number=0;
  obj:any={};
  total_route:Array<string>=[];

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata"];
  
  destdisable(item:string){
    this.src=item;
    console.log(this.src);
    this.selectedSrc=this.cities.indexOf(item);
    console.log(this.selectedSrc);
    //disabling the current city in destination list
    for (let i = 0; i < this.cities.length; i++) {
      if(i===this.selectedSrc){
        this.destOption.nativeElement.options[this.selectedSrc+1].disabled=true;
        // console.log(this.destOption.nativeElement.options[this.selectedSrc+1])
        continue;
      }
      this.destOption.nativeElement.options[this.selectedSrc].disabled=false;
    }

    //disabling all destinations with same source (item)
    for (let i = 0; i < this.cities.length; i++) {
      console.log(this.total_route[i])
  }
  }
  sorcedisable(item:string){
    this.dest=item;
    console.log(this.dest);
    this.selectedDest=this.cities.indexOf(item);
    console.log(this.selectedDest);
    for (let i = 0; i < this.cities.length; i++) {
      // console.log(i)
      if(i===this.selectedSrc){
        // console.log("yes")
      }
      
    }
  }
  printRoute(source:string, destination:string){
   this.printSource=source;
   this.printDest=destination;

   this.obj = { from:source , to:destination };           //creating array to store from and to data 
    this.total_route.push(this.obj);
    console.log(this.total_route);
  }
}
