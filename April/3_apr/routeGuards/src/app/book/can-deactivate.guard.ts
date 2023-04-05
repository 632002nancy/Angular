import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookComponent } from './book.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard{
  canDeactivate(
    component: BookComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("inside canDeactivate")
      console.log(component)
      return component.canExit();
  }
  
}
