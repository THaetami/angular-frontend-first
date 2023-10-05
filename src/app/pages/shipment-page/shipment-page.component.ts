import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: string;
  sellingPrice: string;
  total: string;
  subtotal: string;
  image: string;
  qty: number;
  checked: boolean;
  isCollapse: boolean;
  insurance: boolean;
  subtotalPayment: string;
}

@Component({
  selector: 'app-shipment-page',
  templateUrl: './shipment-page.component.html',
  styleUrls: ['./shipment-page.component.css']
})
export class ShipmentPageComponent {
  isCollapse: boolean = true;
  products: Array<Product> = [];
  priceProduct: string = '';
  qtyProduct: number = 0;
  insuranceCount: number = 0;
  qtyInsurance: number = 0;
  gold: number = 0;
  donation: number = 0;

  constructor(

  ) {
    this.loadDataFromLocalStorage()
  }

  toggleCollapse(product: Product) {
    product.isCollapse = !product.isCollapse;
  }

  loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('checkoutData');

    if (storedData) {
      const existingData = JSON.parse(storedData);

      if (Array.isArray(existingData) && existingData.length > 0) {
        const priceProductNumber = existingData.reduce((total, product) => {
          const subtotalNumber = parseFloat(product.subtotal.replace(/[^0-9,-]/g, '').replace(',', '.'));
          return total + subtotalNumber;
        }, 0);
        this.priceProduct = priceProductNumber;

        this.products = existingData.map((item: any) => ({
          ...item,
          isCollapse: false,
          insurance: false,
          subtotalPayment: item.subtotal,
        }));

        this.qtyProduct = this.products.length;

      }
    }
  }

  addInsurance() {
    // Hitung jumlah produk dengan insurance bernilai true
    const insuranceTrueCount = this.products.filter(product => product.insurance).length;

    // Hitung insuranceCount
    this.insuranceCount = 5000 * insuranceTrueCount;
    this.qtyInsurance = insuranceTrueCount;

    // Loop variable products
    for (const product of this.products) {
      // Konversi subtotal ke tipe data number
      const currentSubtotal = parseFloat(product.subtotal.replace(/[^0-9,-]/g, '').replace(',', '.'));

      // Hitung subtotalPayment berdasarkan insurance
      const newSubtotalPayment = product.insurance ? currentSubtotal + 5000 : currentSubtotal;

      // Update nilai subtotalPayment dalam objek produk
      product.subtotalPayment = `Rp. ${newSubtotalPayment.toLocaleString('id-ID')}`;
    }
  }

  addGold() {
    this.gold = this.gold ? 9000 : 0;
    console.log(this.gold);
  }

  addDonation() {
    this.donation = this.donation ? 5000 : 0;
    console.log(this.donation);
  }

}
