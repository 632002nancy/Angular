import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionCardComponent } from './question-card/question-card.component';

const routes: Routes = [
  { path:'',component:QuestionsComponent},
  { path:'card',component:QuestionCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
