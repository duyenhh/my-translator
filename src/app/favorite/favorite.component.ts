import { Component, OnInit } from '@angular/core';
import  {Record} from '../record';
import {FavoriteService} from '../service/favorite.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  records : Record[];
  constructor( private  favoriteSrv :FavoriteService
                ) {
    this.records = favoriteSrv.getFavorites();
  }

  ngOnInit() {
  }

  deleteRecord(record : Record ){
    this.records = this.records.filter(h => h.orin !== record.orin);
    this.favoriteSrv.updateFavorite(this.records);
  }





}
