import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DisplaysComponent } from './displays/displays/displays.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'display', component: DisplaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
