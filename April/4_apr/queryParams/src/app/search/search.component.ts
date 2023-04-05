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
  queryFilter='';
  queryPage=0;
  constructor(private activatedRoute:ActivatedRoute){
    // using queryParams property of the snapshot property
    this.queryPage=activatedRoute.snapshot.queryParams['page'];
    this.queryCountry=activatedRoute.snapshot.queryParams['country'];
    this.queryTrending=activatedRoute.snapshot.queryParams['trending'];
    this.queryFilter=activatedRoute.snapshot.queryParams['filter'];
    console.log(this.queryFilter)
  }

// Snapshot is not observable. Hence it will not notify you if the value changes

}
