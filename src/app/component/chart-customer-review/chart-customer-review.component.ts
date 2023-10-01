import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-customer-review',
  templateUrl: './chart-customer-review.component.html',
  styleUrls: ['./chart-customer-review.component.css']
})
export class ChartCustomerReviewComponent {
  @Input() rating: string = '0';
  get numericRating(): number {
    return parseInt(this.rating, 10);
  }

}
