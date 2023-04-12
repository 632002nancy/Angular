import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IUser } from "./app.component";
import{HttpClient} from '@angular/common/http'
@Injectable()
export class UserService{
    constructor(private http:HttpClient){}
        getUser():Observable<IUser[]>{
            return this.http.get<IUser[]>('http://localhost:3000');
        }
}