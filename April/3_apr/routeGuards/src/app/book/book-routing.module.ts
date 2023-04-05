import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [{ path: '', component: BookComponent,canDeactivate:[CanDeactivateGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
