import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Options, Question } from '../model/question.model';
import { Store, select } from '@ngrx/store';
import * as UserAction from 'src/app/store/actions/question.actions';
import * as pageData from 'src/app/store/selector/questions.selectors'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  data: Question[];
  options: Options[];
  index: number = 0;
  id:number;

  constructor(private route: ActivatedRoute, private dataService: DataService,private store: Store) { 
     this.id = (this.route.snapshot.params['id']);
    this.store.dispatch(UserAction.QuestionsChild({id:this.id}));
  }

  ngOnInit(): void {
    this.store.pipe(select(pageData.getChildData)).subscribe(data=>{
      this.data=data
      this.options=this.data[this.index]?.options;
    });
    console.log(this.options)
  }

  next(){
    this.index++;
    this.options=this.data[this.index]?.options;
    console.log(this.options)
  }
  previous(){
    this.index--;
    this.options=this.data[this.index]?.options;
  }
  add(item:number){
    console.log(this.options[item].cost)
  }
  submit(){
    return;
  }
}
