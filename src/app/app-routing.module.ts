/**
 * Created by Kin_meow on 4/17/2017.
 */
import {NgModule}       from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {ManageComponent} from './manage/manage.component';
import  {FavoriteComponent} from './favorite/favorite.component';


const routes : Routes = [
  { path : '' , redirectTo : '/home', pathMatch: 'full'},
  { path : 'home', component : ManageComponent},
  { path : 'my-favorite', component : FavoriteComponent}

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [ RouterModule]
})

export class AppRoutingModule{}
