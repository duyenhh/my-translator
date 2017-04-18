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

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HistoryComponent,
    ManageComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HistoryService,FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
