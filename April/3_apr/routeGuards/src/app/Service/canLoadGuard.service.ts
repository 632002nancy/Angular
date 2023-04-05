import { Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class CanLoadGuard{
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }
}