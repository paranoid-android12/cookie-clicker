import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { OvenComponent } from '../oven/oven.component';

@Component({
  selector: 'app-upgrades',
  standalone: true,
  imports: [OvenComponent, CommonModule],
  templateUrl: './upgrades.component.html',
  styleUrl: './upgrades.component.css'
})
export class UpgradesComponent {
  ovenCount: number = 0;
  tempArr = new Array(this.ovenCount);

  addOven(){
    this.ovenCount += 1;
    this.tempArr = new Array(this.ovenCount);
    console.log(this.ovenCount)
  }
}
