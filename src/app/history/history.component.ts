import {Component, OnInit} from '@angular/core';
import  {Record} from '../record';
import {HistoryService} from '../service/history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: []
})
export class HistoryComponent implements OnInit {

  records: Record[];

  constructor(private historySrv: HistoryService) {

    historySrv.ob$.subscribe(list => {
      this.records = list;
    });
    historySrv.InitOb();


  }

  deleteRecord(record: Record) {

    let newRecords = this.historySrv.getHistory().filter(h => h.orin !== record.orin);
    this.historySrv.updateHistory(newRecords);
  }

  deleteAll() {
    this.historySrv.updateHistory(JSON.parse('[]'));
  }

  ngOnInit() {

  }


}



