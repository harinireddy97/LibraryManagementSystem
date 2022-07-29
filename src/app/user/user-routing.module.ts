import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRequestComponent } from './book-request/book-request.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { KidsComponent } from './kids/kids.component';
import { MyColletionComponent } from './my-colletion/my-colletion.component';
import { ReturnsComponent } from './returns/returns.component';

import { RomanticComponent } from './romantic/romantic.component';
import { ScienceComponent } from './science/science.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  // {
  //   path:'user',
  //   component:UserPageComponent
  // },
  {
    path:'user',
    component:DashboardComponent
  },
  {
    path:'science',
    component:ScienceComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'kids',
    component:KidsComponent
  },
  {
    path:'romantic',
    component:RomanticComponent
  },
  {
    path:'request',
    component:BookRequestComponent
  },
  {
    path:'categories',
    component:CategoryComponent
  },
  {
    path:'myBooks',
    component:MyColletionComponent
  },
  {
    path:'userReturns',
    component:ReturnsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
