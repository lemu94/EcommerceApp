import { Injectable } from '@angular/core';
import { data_item } from '../data/item.data';
import { item } from '../model/item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  listedata : item []= data_item;
  constructor() { }


  getListe() : Observable<item[]>
  {
    return of(this.listedata);
  }

}
