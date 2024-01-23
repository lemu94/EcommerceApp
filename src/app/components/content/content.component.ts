import { Component } from '@angular/core';
import { ListitemsComponent } from '../listitems/listitems.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ListitemsComponent, CartComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
