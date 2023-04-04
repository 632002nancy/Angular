import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./authorized.service";

@Injectable()
export class BookGuardService implements CanActivate, CanActivateChild{
    constructor(private authSerive:AuthService, private router:Router){   //angular will inject an instance of AuthService class and assign it to authService
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authSerive.isAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['home']);  //it will redirect to home page if not authenticated
            return false;
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state);
    }
}