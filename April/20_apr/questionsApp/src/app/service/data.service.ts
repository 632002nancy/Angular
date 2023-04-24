import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import {Question} from 'src/app/model/question.model'
import { Options } from 'src/app/model/question.model';
@Injectable()
export class DataService {
    constructor(private http:HttpClient){}

    jsonData:Question=
        {
            id:0,
            title:'',
            parentId:null,
            options:[]=[{
                id:0,
                title:'',
                cost:0,
                image:''
            }],
            hasMultipleValues:false,
            image:''
      }
      d:any;

    getJsonData():Observable<Question[]>{
      return this.http.get<Question[]>('assets/data/QuestionsOptions.json')
      .pipe(map((data)=>{
        return data['filter'](obj=>obj.parentId==null)
      }))       
    }
}
