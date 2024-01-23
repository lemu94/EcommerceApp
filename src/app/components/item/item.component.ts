import { Component, Input } from '@angular/core';
import { item } from '../../model/item.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SiteActions } from '../../store/site.action';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  
  @Input() item! : item;
  constructor(private SiteStore : Store<{sitestore : item}>)
  {
  }

  ajout(item : item)
  {
    this.SiteStore.dispatch(SiteActions.addCart({item : item}));
  }

}
