import { Component, ElementRef, ViewChild } from '@angular/core';

type objType = {
  from: string;
  to: string;
};

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
  total_route:Array<objType>=[];

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata", "Sikkim"];
  
  destdisable(item:string){
    this.src=item;
    console.log(this.src);
    this.selectedSrc=this.cities.indexOf(item);
    console.log(this.selectedSrc);
    //disabling the current city in destination list
    for (let i = 0; i < this.cities.length; i++) {
      if(i===this.selectedSrc){
        this.destOption.nativeElement.options[this.selectedSrc+1].disabled=true;
        continue;
      }
      this.destOption.nativeElement.options[this.selectedSrc].disabled=false;
    }

    //disabling all destinations with same source (item)
    for (let i = 0; i < this.total_route.length; i++) {
      if(this.total_route[i].from===item){
        for (let j = 0; j <  this.destOption.nativeElement.length; j++) {
          if(this.destOption.nativeElement.options[j].value===this.total_route[i].to){
            this.destOption.nativeElement.options[j].disabled=true;
          }
          
        }
      }
    }
  }
  sorcedisable(item:string){
    this.dest=item;
    console.log(this.dest);
    this.selectedDest=this.cities.indexOf(item);
    console.log(this.selectedDest);

    //disabling the current city in source list
    for (let i = 0; i < this.cities.length; i++) {
      // console.log(i)
      if(i===this.selectedSrc){
        this.srcOption.nativeElement.options[this.selectedDest+1].disabled=true;
        continue;
      }
      this.destOption.nativeElement.options[this.selectedSrc].disabled=false;
    }

     //disabling all sources with same destination (item)
     for (let i = 0; i < this.total_route.length; i++) {
      if(this.total_route[i].to===item){
        for (let j = 0; j <  this.srcOption.nativeElement.length; j++) {
          if(this.srcOption.nativeElement.options[j].value===this.total_route[i].from){
            this.srcOption.nativeElement.options[j].disabled=true;
          }
          
        }
      }
    }
  }
  
  printRoute(source:string, destination:string){
   this.printSource=source;
   this.printDest=destination;

   if(source==="empty" || destination==="empty")
   { console.log("yes")  
   this.printSource='' ;  //to not print anything when option is empty
   this.printDest='' ;  //to not print anything when option is empty
   }

   this.obj = { from:source , to:destination };           //creating array to store from and to data 
    this.total_route.push(this.obj);
    console.log(this.total_route);

    this.destOption.nativeElement.selectedIndex=0;
    this.srcOption.nativeElement.selectedIndex=0;

    for(let i=0;i<this.cities.length;i++){              //enable all the options in both lists when printing is done
      this.destOption.nativeElement.options[i].disabled=false;
      this.srcOption.nativeElement.options[i].disabled=false;
    }
  }

  clearRoute(){
    location.reload();   //reload the page and all the presaved data will be lost
  }
}
