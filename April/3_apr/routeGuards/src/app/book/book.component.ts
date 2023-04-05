import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{

  name: any;
  age: any;
  city: any;

  canExit() {
    if (this.name || this.age || this.city) {
      return confirm('You have unsaved changes, do you really want to discard changes?'); //if user click ok it will return true if cancel it will return false
    }
    else {
      return true;
    }
  }
  c() {
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
  }
}
