import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angularFeatures';
}

//---------------version 13
//1. Typescript Update
//Previously 4.4.2 version of Typescript was supported, now Typescript 4.4 support has been added in Angular 13.

// 2. Removal of View Engine
// The view-engine angular 13 feature has been completely removed to reduce the complexity of the Angular 13 codebase.Angular 13 has completely shifted to Ivy which makes it easier for developers to improvise the dynamic components easily.

// 3. NodeJS Support
// Versions older than v12.20.0 are no longer supported by the Angular framework.

//4.Angular CLI Improvements
//Angular CLI helps standardize the process of handling the challenges of the present web development ecosystem.
//Built-in support of persistent build cache. Easy enabling and disabling options for the build cache by the angular.json file. Up to 68% increase in speed of build-cache leading to faster deployment activities.

//5. RxJs version updates
//RxJS 7.4 is now available as the version for apps created with ng-new. Existing apps using RxJS v6.x need to be manually updated it using the npm install rxjs@7.4

//6. Validation Improvements
//Now we can enable and disable validations like min,max,email etc.

//7.Removal of IE 11 Support
//Angular 13 no longer supports IE11. CSS code paths, build passes, polyfills, special JS, and other parameters that were previously required for IE 11 have now been completely dropped off. It is now easier for Angular to use new browser features like CSS variables and web animations using native web APIs.

//8.Changes in the Angular Package Format (APF)
//Older output formats that include View Engine-specific Metadata have been dropped off. Standardization of modern JS formats such as ES2020. Libraries built with the latest version of the APF no longer require the use of ngcc.

//----------------version 14
//1.Angular gets simplified with Standalone Components
//Standalone components eliminate the need of using NgModules

//2.Typed Forms
// This newly added Typed Forms functionality is solely relevant to reactive forms. Values included within form controls, sets, and arrays are type safe. It increases the overall “type” safety of Angular-based apps.

//3.Page Title Accessibility:
// When introducing a title to your page with Angular 14, no extra imports are necessary.

//4.Extended developer diagnostics
//gives more details for templates errors and warning , warning if there is an error in html

//5.Angular CLI
//a)ng completion
//b)ng analytics: hoe much data is using, who is using from where he is using 
//c)ng cache: gives cache information

//-----------version15 
//1.Standalone API (Now, Gradated and out of Developer Preview)

//2. Standalone APIs Allows the Creation of Multi-Route Application.
// Now you can build a multi-route application using the new router standalone APIs. Also, bundlers can reduce the bundle size by around 11% by removing the unused features from the router at the build time.

//3.Directive Composition API
// It allows the developers to increase host elements with the directives and build the Angular application using the code reusability feature, which contributes to effective time management in the development process.

//4.NgOptimizedImage 
//directive helps us to improve image loading speed or performance in Angular applications by following best practices.

//5.Functional Router Guards
//Making the Router even simpler and further reducing the boilerplate, the Router now auto-unwraps default exports with lazy loading, further contributing to reducing the code.
//canActivate:[()=> inject(service_name).function()].

//6.The Router Unwraps Default Imports
//{
// path:"",loadComponent:()=>import('./lazy-file)
//}

//7.Better Stack Traces
// you can trace the code efficiently and simply using the Stack Trace; this feature contributes when facing any error and helps find where this error is experienced or found using chrome dev-tool.

//8.Automatic Language Service Import
// The language service can now import the components needed or which are being used in the template 