import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subjects';

  //creating a subject
  mySubject=new Subject();
 
  ngOnInit(){

    //here both the subscriber will recieve same data(same random value) as Subject makes a single instance for every subscriber
    this.mySubject.subscribe(
      (val=>{
        console.log(val);
      })
    )
    this.mySubject.subscribe(
      (val)=>{
        console.log(val);
      })
    
    this.mySubject.next(Math.random());    //here subject is working as a data provider
  }

  //Multiple observers of an observable, on the other hand, will receive a separate instance of the observable.

}
