import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
// import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { BookInsertionComponent } from './book-insertion/book-insertion.component';
import { ScienceComponent } from './science/science.component';
import { KidsComponent } from './kids/kids.component';
import { HistoryComponent } from './history/history.component';
import { RomanticComponent } from './romantic/romantic.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { IssuingBookComponent } from './issuing-book/issuing-book.component';
import { ReturnsComponent } from './returns/returns.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { BookCopiesComponent } from './book-copies/book-copies.component';
import { IssueListComponent } from './issue-list/issue-list.component';


@NgModule({
  declarations: [AdminPageComponent, BooksListComponent, DashBoardComponent, HeaderComponent, SideNavComponent, FooterComponent, BookInsertionComponent, ScienceComponent, KidsComponent, HistoryComponent, RomanticComponent, NewUserComponent, UpdateUserComponent, UserComponent, UpdateBookComponent, IssuingBookComponent, ReturnsComponent, CategoriesComponent, UsersComponent, BookCopiesComponent, IssueListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // HeaderComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AdminModule { }
