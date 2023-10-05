import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-billing',
  templateUrl: './card-billing.component.html',
  styleUrls: ['./card-billing.component.css']
})
export class CardBillingComponent {
  @Input() qtyProduct: number = 0;
  @Input() price: string = '';
  @Input() priceAfterDiscount: string = '-';
  @Input() submit: Function | undefined;
  @Input() priceProduct: string = '';
  @Input() insurance: number = 0;
  @Input() qtyInsurance: number = 0;
  @Input() gold: number = 0;
  @Input() donation: number = 0;

  onCheckoutClick() {
    if (this.submit && typeof this.submit === 'function') {
      this.submit(); // Panggil fungsi submit jika ada
    }
  }
}
