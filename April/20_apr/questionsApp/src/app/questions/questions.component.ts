import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as questionmodel from 'src/app/model/question.model'
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as pageData from 'src/app/store/selector/questions.selectors'
import * as UserAction from 'src/app/store/actions/question.actions'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService, private router: Router, private store: Store) {
    this.store.dispatch(UserAction.Questions());
  };
  ngOnInit() {
    this.store.pipe(select(pageData.getPageData)).subscribe(data => {
      this.data = data;
    })
  }
  getdata(i: number) {

  }
}
