import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';
import { item } from '../../model/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listitems',
  standalone: true,
  imports: [ItemComponent,CommonModule],
  providers : [ItemService],
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})

export class ListitemsComponent implements OnInit {

  listeItem! : Observable<item[]>;
  constructor(readonly itemService : ItemService)
  {

  }

  ngOnInit(): void {

  this.listeItem = this.itemService.getListe();

  }
  

}
