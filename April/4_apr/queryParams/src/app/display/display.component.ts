import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  queryCountry='';
  queryTrending='';
  queryPage=0;
  constructor(private activatedRoute:ActivatedRoute){
    activatedRoute.queryParams.subscribe(data=>{    //we read the data that is passed from subscribe call
        this.queryCountry=data['country'];  //retrieving the data of query params
        this.queryTrending=data['trending'];
        this.queryPage=data['page'];
    });
  }
}
