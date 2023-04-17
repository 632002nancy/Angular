import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./adminAuth.service";

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            alert("You are not Authorized User!!!");
            return false;
        }
    }
}