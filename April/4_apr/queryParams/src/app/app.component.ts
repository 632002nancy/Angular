import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queryParams';

  queryCountry='';
  queryTrending='';
  queryPage=0;
  constructor(private activatedRoute:ActivatedRoute){
    activatedRoute.queryParams.subscribe(data=>{    //we read the data that is passed from subscribe call
        console.log(data);  //it will console the data (object) after ?
      });
  }
}
