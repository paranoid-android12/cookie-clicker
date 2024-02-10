import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oven',
  standalone: true,
  imports: [],
  templateUrl: './oven.component.html',
  styleUrl: './oven.component.css'
})
export class OvenComponent{
  @Input() ovenCount!: number;
}
