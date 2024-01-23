import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [HeaderComponent,ContentComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

}
