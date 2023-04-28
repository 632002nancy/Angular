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
  previousCost:number[]=[0];
  click:number=-1;

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
    this.previousCost=[0];
    this.click=-1;
  }
  previous(){
    this.index--;
    this.options=this.data[this.index]?.options;
  }
  add(item:number){
    this.click++;
   this.currentCost= this.options[item].cost;

     this.previousCost.push(this.currentCost);
 
  //  console.log(this.previousCost)
  //  console.log(this.data)
   if(this.index==0){
    console.log("inside if")
    this.finalCost=this.currentCost
  }
  else{
    console.log("inside if else previous")
    console.log(this.previousCost)
    var cost=0;
    for (let i = 0; i < this.previousCost.length; i++) {
      cost=cost+this.previousCost[i]
      console.log(this.previousCost[i])
    }
    console.log(cost)
     this.finalCost=((this.finalCost+this.currentCost)-cost);
    //  console.log((this.finalCost+this.currentCost)-cost)
   }
 
  }
  submit(){
    this.router.navigate(['/submit']);
  }
}
