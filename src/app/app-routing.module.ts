/**
 * Created by Kin_meow on 4/17/2017.
 */
import {NgModule}       from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from './guard/auth.guard';
import {ManageComponent} from './manage/manage.component';
import  {FavoriteComponent} from './favorite/favorite.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes : Routes = [
  { path : '' , redirectTo : '/home', pathMatch: 'full'},
  { path : 'home', component : ManageComponent},
  { path : 'my-favorite', component : FavoriteComponent,canActivate: [AuthGuard]},
  { path : 'login', component : LoginComponent},
  { path : 'register', component :RegisterComponent},

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [ RouterModule]
})

export class AppRoutingModule{}
