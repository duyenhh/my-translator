import {Injectable} from '@angular/core';
import {Record} from '../record';
@Injectable()
export class FavoriteService {

  constructor(){
  }
  getFavorites(): Record[] {
    return JSON.parse(localStorage.getItem('favorite'));
  }


  addFavorite(record: Record) {
    let newList = this.getFavorites().filter(h => h.orin !== record.orin);
    newList.push(record);
    this.updateFavorite(newList);
  }

  updateFavorite(newR: Record[]) {
    localStorage.setItem('favorite', JSON.stringify(newR));
   // alert(JSON.stringify(this.getFavorites()));
  }

}
