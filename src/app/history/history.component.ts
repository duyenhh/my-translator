import {Component, OnInit,Output, Input,EventEmitter} from '@angular/core';
import  {Record} from '../record';
import {HistoryService} from '../service/history.service';
import {FavoriteService} from '../service/favorite.service';
import {forEach} from "@angular/router/src/utils/collection";
import {FavoriteDirective} from '../myDirectives/favorite.directive';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [FavoriteService]
})
export class HistoryComponent implements OnInit {

  @Input('records')
  records: Record[];
  @Output('deleteEvent')
  DelEvent = new EventEmitter <Record> ();


  constructor(private historySrv: HistoryService,
              private  favoriteSrv : FavoriteService) {
  }

  deleteRecord(record: Record) {

    let newRecords = this.historySrv.getHistory().filter(h => h.orin !== record.orin);
    this.historySrv.updateHistory(newRecords);
    this.DelEvent.emit(record);
  }

  deleteAll() {
    this.historySrv.updateHistory(JSON.parse('[]'));
    this.DelEvent.emit();
  }

  addFavorite(record : Record){
    this.favoriteSrv.addFavorite(record);

  }

  isFavorite (record : Record) : boolean
  {
    /*this.favoriteSrv.getFavorites().forEach(
      val => {if (record.orin === val.orin) return true; }
    );
    return false;*/

    let len1 = this.favoriteSrv.getFavorites();
    if(len1 === null) return false;
    let len2 =this.favoriteSrv.getFavorites().filter(h => h.orin !== record.orin);
    if( len1.length === len2.length) return false;
    else return true;
  }

  ngOnInit() {

  }


}



