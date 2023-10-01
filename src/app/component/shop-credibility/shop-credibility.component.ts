import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-credibility',
  templateUrl: './shop-credibility.component.html',
  styleUrls: ['./shop-credibility.component.css']
})
export class ShopCredibilityComponent {
  @Input() rate: string = '0';
}
