import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';

import {NeedAuthGuard} from './auth.guard';

const routes: Routes = [

  { path: '',   redirectTo: '/login', pathMatch: 'full' },

{
  path: 'login',
  component: LoginComponent
},

{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'users',
  component: UsersComponent,
  canActivate: [NeedAuthGuard]
},


]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
