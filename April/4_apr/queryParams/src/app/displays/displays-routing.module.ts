import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaysComponent } from './displays/displays.component';

const routes: Routes = [{path:'', component:DisplaysComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplaysRoutingModule { }
