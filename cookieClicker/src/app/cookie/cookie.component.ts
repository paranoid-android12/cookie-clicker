import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {

}
