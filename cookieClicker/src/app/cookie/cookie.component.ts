import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { UpgradesComponent } from '../upgrades/upgrades.component';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [CounterComponent, UpgradesComponent],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {
  cookieCount: number = 0;

  cookieClicked(){
    this.cookieCount += 1;
  }
}
