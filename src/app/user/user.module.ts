import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchesComponent } from './branches/branches.component';
import { ScienceComponent } from './science/science.component';
import { HistoryComponent } from './history/history.component';
import { KidsComponent } from './kids/kids.component';
import { RomanticComponent } from './romantic/romantic.component';
import { BookRequestComponent } from './book-request/book-request.component';
import { CategoryComponent } from './category/category.component';
import { MyColletionComponent } from './my-colletion/my-colletion.component';
import { ReturnsComponent } from './returns/returns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserPageComponent, HeaderComponent, SideNavComponent, DashboardComponent, BranchesComponent, ScienceComponent, HistoryComponent, KidsComponent, RomanticComponent, BookRequestComponent, CategoryComponent, MyColletionComponent, ReturnsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
