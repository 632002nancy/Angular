import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-submitcomponent',
  templateUrl: './submitcomponent.component.html',
  styleUrls: ['./submitcomponent.component.css']
})
export class SubmitcomponentComponent {
  finalprice:number=0;
constructor(private route:ActivatedRoute){
  this.finalprice = (this.route.snapshot.params['cost']);
}
}
