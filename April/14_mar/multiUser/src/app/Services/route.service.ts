import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export class RouteService{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return true;
    }
}