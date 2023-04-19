import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None   //css will get applied on every component used here
})
export class AppComponent {
  title = 'viewEncapsulation';
}

//by default we have ViewEncapsulation.emulated it adds a unique class to every component element whichkeeps it differ from the css of ther component
