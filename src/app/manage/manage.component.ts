import {Component, OnInit} from '@angular/core';
import  {Record} from '../record';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  records: Record[];

  constructor() {
    this.records = JSON.parse(localStorage.getItem('history'));
  }

  ngOnInit() {

  }

  updateHistory() {
    this.records = JSON.parse(localStorage.getItem('history'));
  }
}
