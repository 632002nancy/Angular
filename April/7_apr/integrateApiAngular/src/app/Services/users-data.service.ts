import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get('http://localhost:3000');
  }

  postUsers(data:string){
    return this.http.post('http://localhost:3000',data);
  }

  deleteUsers(data:string){
    return this.http.delete('http://localhost:3000/'+data);
  }
 
}
