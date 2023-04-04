import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServicesComponent } from "../services/services.component";
import { Injectable } from "@angular/core";
import { BookGuardService } from "./bookGuard.service";

@Injectable()
export class ServiceResolved implements Resolve<any>{
    constructor(private services:BookGuardService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {   //it is going to return data not boolean value
        return this.services.getImage().then((data)=>{
            return data;
        })
    }

}