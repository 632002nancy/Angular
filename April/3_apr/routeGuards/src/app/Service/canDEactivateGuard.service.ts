import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BookComponent } from "../book/book.component";
import { Observable } from "rxjs";

export interface IDeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

//it will not allow user to navigate away to other page 
export class CanDeactivateGuardService{   //it is of generic type and we want to implement this canDeactivate on bookComponent so it is of type BookComponent
    canDeactivate(component: BookComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {   //component at which we want to use this CanDeactivateGuardService
      return component.canExit();
    }
}