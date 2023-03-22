import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputOutputDecorators';

  inputDecorator: string = "To use the @Input() decorator in a child component class, first import Input and then decorate the property with @Input()";

  outDecorator: string = '';

  outDecoratorEventCalled(data: string) {   //this method will be called when custom event of child component will be raised, here data is the data emitted by custom event
    this.outDecorator = data;
    console.log(this.outDecorator);
  }
}
