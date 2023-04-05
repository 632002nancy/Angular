import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  queryCountry='';
  queryTrending='';
  queryPage=0;
  constructor(private activatedRoute:ActivatedRoute){
    activatedRoute.queryParams.subscribe(data=>{    //we read the data that is passed from subscribe call
        console.log(data);  //it will console the data (object) after ?
        this.queryCountry=data['country'];  //retrieving the data of query params
        this.queryTrending=data['trending'];
        this.queryPage=data['page'];
    });
  }

}
