import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {  
    this.count$ = store.select('count');   //connecting the count$ stream to the store's count state
  }
 
  increment():void {
    this.store.dispatch(increment());
  }
 
  decrement():void {
    this.store.dispatch(decrement());
  }
 
  reset():void {
    this.store.dispatch(reset());
  }
}
