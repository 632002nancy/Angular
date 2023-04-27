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
  finalCost:number=0;
  currentCost:number=0;

  constructor(private route: ActivatedRoute, private dataService: DataService,private store: Store,private router:Router) { 
     this.id = (this.route.snapshot.params['id']);
    this.store.dispatch(UserAction.QuestionsChild({id:this.id}));
  }

  ngOnInit(): void {
    this.store.pipe(select(pageData.getChildData)).subscribe(data=>{
      this.data=data;
      this.options=this.data[this.index]?.options;
    });
  }

  next(){
    this.index++;
    this.options=this.data[this.index]?.options;
  }
  previous(){
    this.index--;
    this.options=this.data[this.index]?.options;
  }
  add(item:number){
   this.currentCost= this.options[item].cost;
   if(this.data[this.index].hasMultipleValues==false){
    this.finalCost+=this.currentCost;
   }
 
  }
  submit(){
    this.router.navigate(['/submit']);
  }
}
