import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    getJsonData():Question{
        this.http.get('assets/data/QuestionsOptions.json').subscribe((data)=>{
            // console.log(data);
             this.jsonData=data
        })
        return this.jsonData
    }
}
