import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { SubmitcomponentComponent } from './submitcomponent/submitcomponent.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'question/:id', component: QuestionCardComponent },
  { path: 'submit', component: SubmitcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
