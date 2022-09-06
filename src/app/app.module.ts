import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    SignUpComponent,
    ContactsComponent,
    NewsComponent,
    FooterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    UserRoutingModule,
    BrowserAnimationsModule,AdminRoutingModule,
    HttpClientModule,ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
