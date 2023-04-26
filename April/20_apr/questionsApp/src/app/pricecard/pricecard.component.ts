import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.css']
})
export class PricecardComponent {
  @Input() cost:number = 0;
}
