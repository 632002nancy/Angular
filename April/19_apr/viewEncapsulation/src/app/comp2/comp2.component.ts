import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.None      //when thiscomponent is rendered it will override the css of every component
})
export class Comp2Component {

}
