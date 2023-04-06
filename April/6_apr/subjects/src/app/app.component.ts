import { Component,OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subjects';

  //creating a subject
  mySubject=new Subject();  //subject dont have any parameter

  //BehaviorSubject
  bSubject=new BehaviorSubject<number>(0); // behaviorSubject holds an initial value

  //Replay Subject
  rSubject=new ReplaySubject();   //emit/buffer old values to new subscribers
  // rSubject=new ReplaySubject(2); //buffer only last 2 emitted values to the subscriber

  //async Subject
  aSubject=new AsyncSubject();
 
  ngOnInit(){

    //here both the subscriber will recieve same data(same random value) as Subject makes a single instance for every subscriber
    this.mySubject.subscribe(
      (val)=>{
        console.log(`Sub 1 : ${val}`);
      });
    this.mySubject.subscribe(
      (val)=>{
        console.log(`Sub 2 : ${val}`);
      });
    
    this.mySubject.next(Math.random());    //here subject is working as a data provider
   
    //subscribing behavior subject
    this.bSubject.subscribe(   
      (val)=>{
        console.log(`Sub 1 : ${val}`);
      });
      this.bSubject.next(200);
      this.bSubject.next(300);
      this.bSubject.subscribe(   
      (val)=>{
          console.log(`Sub 2 : ${val}`);   //here first it will hold the last emitted data i.e.,300
      });

      //subscribing Replay Subject
      this.rSubject.next("Hello");
      this.rSubject.next("How are you?");

        this.rSubject.subscribe(
          (val)=>{
            console.log(`sub 1: ${val}`);  //it will hold both the old emitted values for new subscriber
          });
        this.rSubject.next("Where you live?");
        this.rSubject.subscribe(
          (val)=>{
            console.log(`sub 2: ${val}`);  //it will hold both the old emitted values for new subscriber
          });
          this.rSubject.next("Keep Learning");

      //subscribing async subject
            this.aSubject.next("A");
            this.aSubject.next("B");
                        
            this.aSubject.subscribe(
              (val)=>{
                console.log(`Sub 1: ${val}`)   //it will hold last emitted value(c) wen complete signal is emitted,value after complete will be neglected.
              });
              this.aSubject.next("C");
              this.aSubject.complete();
              this.aSubject.subscribe(
                (val)=>{
                  console.log(`Sub 2: ${val}`)  //gives last emited value before complete to current or future subscriber
                });
                this.aSubject.next("D");
                this.aSubject.subscribe(
                  (val)=>{
                    console.log(`Sub 3: ${val}`)  //only takes care of the last emitted value efore complete
                  });
  }
  //Multiple observers of an observable will get seperate instance, on the other hand in subject single instance is made for every subscriber.
}