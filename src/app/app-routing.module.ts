import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent 
  },
  {
    path:"login",
    
    component:LoginComponent
  },
  
  {
    path: 'admin',
    canActivate:[AuthGuard],
    loadChildren: () =>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'user',
  canActivate:[AuthGuard],
    loadChildren: () =>import('./user/user.module').then(m=>m.UserModule)
  }
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
