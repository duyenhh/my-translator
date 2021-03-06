import {Component, OnInit, Output} from '@angular/core';
import {Injectable, EventEmitter} from '@angular/core';
import {TranslateService} from "../service/translate.service";
import {ApiService} from "../service/api.service";
import {HistoryService} from "../service/history.service";
import  {Record} from '../record';
import {Observable, BehaviorSubject} from "rxjs";
import * as Rx from "rxjs";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
  providers: [TranslateService, ApiService]
})
export class TranslatorComponent implements OnInit {

  input: string;
  output: string;


  @Output('addRecordEvent')
  addReEvent = new EventEmitter < Record >();


  constructor(private  apiSvr: ApiService,
              private  historySrv: HistoryService) {
    let lastRecord = this.historySrv.getLastRecord();
    if (lastRecord !== null) {
      this.input = lastRecord.orin;
      this.output = lastRecord.tran;
    }


  }


  ngOnInit() {
    const MyInput = document.getElementById('input_box');
    let  input$ = Rx.Observable.fromEvent<KeyboardEvent>(MyInput,'keyup');
    let submitOb = input$.debounceTime(900)
      .map(x=> this.input)
      .subscribe(
        x => {if (x!==  "")  this.submit()},
        error => alert(error),
       // () => this.submit()
      );
  }


  submit() {
    this.apiSvr.testTranslate(this.input)
      .subscribe(
        data => this.output = data.json().text,
        error => alert(error),
        () => {
          let myRecord = JSON.parse('{"orin":"' + this.input + '","tran":"' + this.output + '"}');
           this.historySrv.addRecord(myRecord);
          this.addReEvent.emit(myRecord);
        }
      );
  }


}
