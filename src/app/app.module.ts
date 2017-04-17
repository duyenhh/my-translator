import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { HistoryComponent } from './history/history.component';
import {HistoryService} from "./service/history.service";

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
