import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering:string,
    search?:string
  ):Observable<APIResponse<Game>>{
    let params= new HttpParams().set('ordering',ordering);
    if(search){  //anything we search we want to append to search parameter
      params = new HttpParams().set('ordering',ordering).set('search',search);
    }
    return this.http.get<APIResponse<Game>>(`https://rawg-video-games-databse.p.rapidapi.com/games`,{
      params:params,
    });
  }
}
