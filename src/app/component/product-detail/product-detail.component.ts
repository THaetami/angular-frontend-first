import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  selectedTab: number = 1;

  @Input() description: string = '';
  @Input() title: string = '';

  showTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
