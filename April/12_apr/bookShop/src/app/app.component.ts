import { Component } from '@angular/core';
import { Book } from './state/book.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookShop';
  
  fakeResponse:Book={
    title:"sumita Arora",
    pages:459
  }
}
