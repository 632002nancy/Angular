import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface student{
  name:string,
  email:string, 
  password:string,
  id?:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient){ }
  getUsers(){
    return this.http.get('http://localhost:3000');
  }

  postUsers(data:student){
    console.log(data)
    return this.http.post('http://localhost:3000',data);
  }

  deleteUsers(data:string){
    return this.http.delete('http://localhost:3000/'+data);
  }

  putUsers(data:string,value:student){  
    return this.http.put('http://localhost:3000/'+data,value);
  }
 
}
