import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() inDecorator: string = "";       //input decorator means here inDecorator property can get data from parent class uses property binding


  outputDecorator: string = "@Output() marks a property in a child component as a doorway through which data can travel from the child to the parent.";
  @Output() //decorating custom event with @Output bcz we want to send some data from child to parent
  outDecoratorEvent: EventEmitter<string> = new EventEmitter<string>();  //this is our custom event, here we are instantiating eventEmitter class with property name outDecorator, this event is going to emit data of string type, 

  outDecoratorSelected() {   //this metod will raise the event
   this.outDecoratorEvent.emit(this.outputDecorator);  //whenever outDecorator will be raised it will emit some data of type string
    // console.log("event emitted");
    //whenever outDecorator event raise it will emit the value of outputDecorator
  }
}
