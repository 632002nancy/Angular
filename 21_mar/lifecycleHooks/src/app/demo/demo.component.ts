import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked , OnDestroy{     //implementing the interfaces of lifecycle hooks
  @Input() text: string = 'Nancy';


  constructor() {
    console.log(" inside constructor");       //when DemoComponent class gets instantiated first method called is constructor will only get invoked one time
    console.log(this.text);       //by the time constructor is called input properties are not updated and will show whatever we write at the declaration time (Nancy here)
  }

  ngOnChanges(changes: SimpleChanges) {      //ngOnchange gets called for the first time and every time value of input bound property changes (value of text changes)
    //if we write it somewhere else then also it will be fired after constructor
    //ngOnChanges will be called everytime the value of value property changes 
    console.log("inside ngOnChanges");
    console.log(changes);   //value will be inputvalue inside appcomponent
  }

  ngOnInit() {
    console.log("inside ngOnInit");  //after the constructor is called ngOnInit will be called
    //by the time ngOnInit is called input properties of components are updated
    console.log(this.text); //by the time ngOnInit is called input properties of components are updated (whatever written in inputvalue (property of appcomponent) as it is assigned to value )
  }

  ngDoCheck() {   //it is called even their is no change in input bound property
    console.log("inside ngDoCheck");   //ngDoCheck gets called everytime change detection cycle runs
  }

  ngAfterContentInit(): void {  //called when components projected content (content to be projected in ng-content(demohtml)) is been fully initialized, called only at the first change detection cycle
    console.log("inside ngAfterContentInit");
  }

  ngAfterContentChecked(): void {  //called whenever projected content changes
    console.log("inside ngAfterContentChecked"); //gets called everytime change detection cycle runs
  }

  ngAfterViewInit(){    //gets called when the components view (view of the component) and all its child views are fully initialized
    console.log("inside ngAfterViewInit");   //only called at first initialization, called only at the first change detection cycle
  }

  ngAfterViewChecked(){  //gets called for each change detection life cycle when the components view (view of the component) and all its child views are fully initialized
    console.log("inside ngAfterViewChecked");
  }

  ngOnDestroy(){   //called just before the component or directive gets destroyed
    console.log("inside ngOnDestroy");  
  }
}

