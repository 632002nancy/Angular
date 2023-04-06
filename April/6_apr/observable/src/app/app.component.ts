import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable';

  //creating an observable using 'observable constructor'
  // myObservale=new Observable((observer)=>{          //creating an observale variable(myObservale using observable), observer is injected by rxjs lib it is the subscriber waiting for the data
  //   console.log("observable starts");
  //   observer.next("1");   //emitting the data
  //   observer.next("2");   // the data which this observable is going to stream
  //   observer.next("3");   
  //   //  setTimeout(() => {
  //   //   observer.error(new Error("Something went wrong,Please try again later!!!"));   //when an observable emits an error values after that error will not be emitted
  //   //  }, 3000); 
  //   //   setTimeout(() => {
  //   //    observer.next("4");   
  //   //   }, 3000);
  //   observer.next("4"); 
  //   observer.complete(); //it doesnot take any parameter also after this complete signal no value will be emitted by this observable
  // });

  // //creating an observable using 'create' method 
  //  myObservable=Observable.create((observer)=>{
  //   observer.next("A");   //emitting the data
  //   observer.next("B");   // the data which this observable is going to stream
  //   // observer.error(new Error("Something went wrong,Please try again later!!!"));
  //   observer.next("C"); 
  // })

  array1 = [1, 2, 3, 4];
  array2 = ['A', 'B', 'C', 'D'];

  //creating an observable using 'of' operator
  // myObservable=of(this.array1,this.array2,20,"Nancy");     //we can pass any number of argument inside 'of' operator , those arguments are emitted as data for the observable., accepts 'n' number of arguments
  //it will emit the whole array at once 
  //it will implicitly emit complete signal after emitting all the data

  //creating an observable using 'from' operator
  myObservable = from(this.array1);  //it iterates over the iterable(array) and emit value one by one,also from operator only take one argument of type iterable
  //it will implicitly emit complete signal after emitting all the data

  //suppose we want to tranform the data returned by myObservable (multiply data by 5) and pass that data to the observable so we use operators (map),pipe is used to chain operators to observable
  transformedObservable = this.myObservable.pipe(map((val) => {   //val is the data emitted by source observable(myObservable), map operator is going to return a new observable and that new observable will emit the transformed data from source observable
    return val * 5;
  }),(filter((val) => {   //first map th data return the data the filter the data and return the data to transformedObservable
    return val >= 15;     //return a new observable with filtered value
  })));

  // filteredObservable = this.transformedObservable.pipe(filter((val) => {   //filtered the data from source observable(transformedObservable) based on the condition
  //   return val >= 15;
  // }))

  ngOnInit() {
    //subscribing to the observable         
    // this.myObservable.subscribe(
    this.transformedObservable.subscribe(
      (val) =>   //val have the value which observable emitted,optional parameter which is exected everytime the next function return a value (line 13)
      {
        console.log("subscribed the data");
        console.log(val);
      },

      (error) => {   //optional parameter which is executed when the error signal emitted
        alert(error.message);
        console.log(error);
      },

      () => { console.log("completed Execution of Observable") } //optional parameter which is executed when the complete signal emitted
    );
  }
}
