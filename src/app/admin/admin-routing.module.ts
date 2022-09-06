import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from '../home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BookCopiesComponent } from './book-copies/book-copies.component';
import { BookInsertionComponent } from './book-insertion/book-insertion.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CategoriesComponent } from './categories/categories.component';


import { DashBoardComponent } from './dash-board/dash-board.component';
import { HistoryComponent } from './history/history.component';
import { IssueListComponent } from './issue-list/issue-list.component';

import { IssuingBookComponent } from './issuing-book/issuing-book.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReturnsComponent } from './returns/returns.component';
import { ScienceComponent } from './science/science.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-page',
    pathMatch: 'full',
    
  },
  {
    path: 'admin-page',
    component: AdminPageComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'booksList',
    component: BooksListComponent
  },
  {
    path: 'insertBook',
    component: BookInsertionComponent
  },
 
  {
    path:"newUser",
    component:NewUserComponent
  },
  {
    path:'userList',
    component:UserComponent
  },
 
  {
    path:'updateBook',
    component:UpdateBookComponent
  },
  {
    path:'issueList',
    component:IssueListComponent

  },
  {
    path:'return',
    component:ReturnsComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'users',
    component:UsersComponent
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
    path:'bookcopies',
    component:BookCopiesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
