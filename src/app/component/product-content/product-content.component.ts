import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent {
  @Input() title: string = '';
  @Input() rate: string = '0';
  @Input() sellingPrice: string = '0';
  @Input() discount: number = 0;
  @Input() price: string = '0';

   constructor(
    private location: Location,
  ) {

  }

  goBack(): void {
    this.location.back();
  }
}
