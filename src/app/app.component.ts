import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from './components/site/site.component';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcommerceApp';

  constructor()
  {
    setTheme('bs5');
  }
}
