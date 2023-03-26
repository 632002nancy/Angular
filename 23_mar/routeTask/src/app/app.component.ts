import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  title = 'routeTask';
  @ViewChild('myform') form!: NgForm;  //! form is a property which is saving this ngForm, operator you basically say: I know what I'm doing and I know that angular will set this value for me
  @ViewChild('sourceSelect') srcOption!: ElementRef;
  @ViewChild('destSelect') destOption!: ElementRef;


  srcElement = document.querySelector("input[formControlName='source']");
  destElement = document.querySelector("input[formControlName='destination']");
  src:string='';
  dest:string='';
  total_route:Array<objType> = [];
  selectedSource:number=0;
  selectedDest:number=0;

  obj:any={};


  isDisable:boolean=true;

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata","Sikkim"];

  destDisable(item:string){
    // console.log(this.form); 
    console.log(item);
    this.selectedSource= this.cities.indexOf(item);
    console.log(this.selectedSource);
    for (let i = 0; i < this.cities.length; i++) {
      if(i===this.selectedSource){
       console.log(this.srcElement)
      }
      // this.destOption.nativeElement.options[this.selectedSource].disabled=false;
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

  srcDisable(item:string){
    console.log(item);
    this.selectedDest= this.cities.indexOf(item);
    console.log(this.selectedDest);

    
    //disabling the current city in source list
    for (let i = 0; i < this.cities.length; i++) {
      // console.log(i)
      if(i===this.selectedSource){
        this.srcOption.nativeElement.options[this.selectedDest+1].disabled=true;
        continue;
      }
      this.destOption.nativeElement.options[this.selectedSource].disabled=false;
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

  printRoute(){
    this.isDisable=false;
    console.log(this.form);  //console object of type ngform
    // console.log(this.cities[0]);
    this.src=(this.form.value.source);
    // console.log(this.src);
    this.dest=(this.form.value.destination);
    // console.log(this.dest);
    this.obj = { from: this.form.value.source, to: this.form.value.destination };           //creating array to store from and to data 
    this.total_route.push(this.obj);
    console.log(this.total_route);

    for(let i=0;i<this.cities.length;i++){              //enable all the options in both lists when printing is done
      this.destOption.nativeElement.options[i].disabled=false;
      this.srcOption.nativeElement.options[i].disabled=false;
    }
    this.form.reset();  //set form control and form state to empty
  }
}