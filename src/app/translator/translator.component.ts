import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {TranslateService} from "../service/translate.service";
import {ApiService} from "../service/api.service";
import {HistoryService} from "../service/history.service"
import {Observable} from "rxjs";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
  providers: [TranslateService, ApiService]
})
export class TranslatorComponent implements OnInit {

  input: string;
  output: string;

  constructor(private  apiSvr: ApiService,
              private  historySrv: HistoryService) {
    let lastRecord = this.historySrv.getLastRecord();
    if (lastRecord !== null) {
      this.input = lastRecord.orin;
      this.output = lastRecord.tran;
    }
  }


  ngOnInit() {
  }


  submit() {
    this.apiSvr.testTranslate(this.input)
      .subscribe(
        data => this.output = data.json().text,
        error => alert(error),
        () => this.historySrv.addRecord(JSON.parse('{"orin":"' + this.input + '","tran":"' + this.output + '"}')),
      );
  }


}
