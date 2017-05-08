import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { HistoryComponent } from './history/history.component';
import {HistoryService} from "./service/history.service";
import { ManageComponent } from './manage/manage.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AppRoutingModule }     from './app-routing.module';
import {FavoriteService} from './service/favorite.service';
import {FavoriteDirective} from './myDirectives/favorite.directive';
import { PipeComponent } from './pipe/pipe.component';
import  {AuthGuard} from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import {AlertService} from "./service/alert.service";
import { RegisterComponent } from './register/register.component';
import {AuthenticationService} from "./service/authentication.service";
import {UserService} from "./service/user.service";


@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HistoryComponent,
    ManageComponent,
    FavoriteComponent,
    FavoriteDirective,
    PipeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HistoryService,FavoriteService, AuthGuard, AlertService, AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
