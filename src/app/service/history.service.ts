import {Injectable} from '@angular/core';
import {Record} from '../record';
import {Observer, Observable, Subject} from "rxjs";
import * as Rx from "rxjs";


@Injectable()
export class HistoryService {
  ob = new Subject< Record[]>();
  public ob$ = this.ob.asObservable();


  InitOb() {
    this.ob.next(this.getHistory());
  }

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
    this.ob.next(this.getHistory());
  }

  getLastRecord(): Record {
    let list = this.getHistory();
    if(list.length === 0) return null;
    return list[list.length - 1];
  }
}
