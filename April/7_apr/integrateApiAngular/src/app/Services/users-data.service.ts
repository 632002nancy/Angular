import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000';
  getUsers(){
    return this.http.get(this.url)
  }

  postUsers(data:any){
    return this.http.post(this.url,data);
  }

  deleteUsers(data:any){
    return this.http.delete(this.url+data);
  }
}
