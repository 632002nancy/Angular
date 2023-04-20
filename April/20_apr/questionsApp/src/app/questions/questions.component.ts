import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import * as questionmodel from 'src/app/model/question.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  constructor(private dataService:DataService, private router:Router){};
  data: { id: number, title: string, parentID: any, options: any[], image: string }[] = [

  ];
  jsonData:questionmodel.Question={
    id:0,
    title:'',
    parentId:null,
    options:[{
      id:0,
      title:'',
      cost:0,
      image:''
    }],
    hasMultipleValues:false,
    image:'string'
  }

  getdata(){
   let data= this.dataService.getJsonData();
   console.log(data)
  }

  card1click(){
    this.router.navigate(['card'])
  }
  card2click(){
    this.router.navigate(['card'])
  }
}
