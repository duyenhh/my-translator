import {Injectable} from '@angular/core';
import {Record} from '../record';
import {Observer, Observable, Subject} from "rxjs";
import * as Rx from "rxjs";


@Injectable()
export class HistoryService {





/*  constructor(){
    this.ob.next(this.getHistory());
  }*/

  getHistory(): Record[] {
    return JSON.parse(localStorage.getItem('history'));
  }

  addRecord(record: Record) {
    let newList = this.getHistory().filter(h => h.orin !== record.orin);
    if (newList.length >= 10) newList.shift();
    newList.push(record);
    this.updateHistory(newList);
  }

  updateHistory(newR: Record[]) {
    localStorage.setItem('history', JSON.stringify(newR));
  }

  getLastRecord(): Record {
    let list = this.getHistory();
    if(list.length === 0) return null;
    return list[list.length - 1];
  }
}
