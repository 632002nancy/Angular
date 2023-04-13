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
        postUsers(data:IUser):Observable<IUser>{
            console.log(data)
            return this.http.post<IUser>('http://localhost:3000',data);
          }
        
          deleteUsers(data:number):Observable<IUser>{
            return this.http.delete<IUser>('http://localhost:3000/'+data);
          }
        
          putUsers(data:number,value:IUser):Observable<IUser>{  
            return this.http.put<IUser>('http://localhost:3000/'+data,value);
          }
}