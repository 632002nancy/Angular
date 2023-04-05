import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queryParams';

  queryCountry = '';
  queryTrending = '';
  queryPage: string | null = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    //queryParams is a Observable that returns a Params
    activatedRoute.queryParamMap.subscribe(data => {    //we read the data that is passed from subscribe call
      // console.log(data);
      this.queryPage = data.get('page');  //The data array is a list of parameter values, indexed by name.
      // console.log(this.queryPage);
    });
    // get a notification when the value changes. Hence we can retrieve the latest value of the parameter when using queryParams observable 
  }

  gotoDisplay() {
    this.router.navigate(
      ['/display'],
      { queryParams: { page: 'Display Page', country: 'USA'}, 
      queryParamsHandling: 'merge' }  //merges the query parameters from the current route with that of the next route before navigating to the next route, also updates the query params for this and takes same of the existing
    );
  }
}
