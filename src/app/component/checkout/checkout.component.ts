import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() stock: number = 0;
  @Input() image: string = '';
  @Input() price: string = '0';
  @Input() sellingPrice: string = '0';
  subtotal: string = '-';
  total: string = '-';
  inputValue: number = 0;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
  ) {

  }

  ngOnInit() {
    if (this.stock > 0) {
      this.inputValue = 0;
    }
  }

  decrement() {
    if (this.inputValue > 0) {
      this.inputValue--;
    }
    this.calculatePrice();
  }

  increment() {
    if (this.inputValue < this.stock) {
      this.inputValue++;
    }
    this.calculatePrice();
  }

  calculatePrice() {
    // Cek apakah inputValue hanya berisi karakter 0-9
    const isNumeric = /^[0-9]+$/.test(this.inputValue.toString());

    if (isNumeric) {
        // Menghapus titik dan koma dari string harga
        const priceWithoutSeparator = this.price.replace(/\./g, '').replace(',', '.');
        const sellingPriceWithoutSeparator = this.sellingPrice.replace(/\./g, '').replace(',', '.');

        // Mengkonversi harga ke tipe data number
        const priceNumber = parseFloat(priceWithoutSeparator);
        const sellingPriceNumber = parseFloat(sellingPriceWithoutSeparator);

        // Menghitung subtotal berdasarkan input value dan harga
        const totalNumber = priceNumber * parseFloat(this.inputValue.toString());
        const subtotalNumber = sellingPriceNumber * parseFloat(this.inputValue.toString());

        // Menformat ulang total dan subtotal sebagai mata uang Indonesia
        this.total = 'Rp. ' + totalNumber.toLocaleString('id-ID');
        this.subtotal = 'Rp. ' + subtotalNumber.toLocaleString('id-ID');
    }
  }

  onInputChange() {
    if (this.inputValue < 0 || !this.inputValue) {
      this.inputValue = 0;
    }
    if (this.inputValue > this.stock) {
      this.inputValue = this.stock;
    }
    this.calculatePrice();
  }

  addCartLocalStorage() {
    const isNumeric = /^[0-9]+$/.test(this.inputValue.toString());
    if (this.inputValue > 0 && isNumeric) {
      const storedData = localStorage.getItem('cartData');
      let existingData = [];

      if (storedData) {
        existingData = JSON.parse(storedData);

          // Pastikan existingData adalah array
          if (!Array.isArray(existingData)) {
            existingData = [];
          }

          // Cari apakah ada item dengan id yang sama
          const existingItem = existingData.find((item) => item.id === this.id);

          if (existingItem) {
            // Menghapus karakter "Rp." dan koma, kemudian mengganti titik dengan kosong
            const existingSubtotal = parseFloat(existingItem.subtotal.replace(/[^0-9,-]/g, '').replace(',', '.'));
            const existingTotal = parseFloat(existingItem.total.replace(/[^0-9,-]/g, '').replace(',', '.'));

            const subtotalNumber = parseFloat(this.subtotal.replace(/[^0-9,-]/g, '').replace(',', '.'));
            const totalNumber = parseFloat(this.total.replace(/[^0-9,-]/g, '').replace(',', '.'));

            const newSubtotal = existingSubtotal + subtotalNumber;
            const newTotal = existingTotal + totalNumber;
            existingItem.subtotal = 'Rp. ' + newSubtotal.toLocaleString('id-ID');
            existingItem.total = 'Rp. ' + newTotal.toLocaleString('id-ID');

            const newQty = Number(existingItem.qty) + Number(this.inputValue);
            if (newQty <= existingItem.stock) {
              existingItem.qty = newQty;
            } else {
              existingItem.qty = existingItem.stock;
            }
          } else {
            // Jika tidak ada, tambahkan sebagai elemen baru
            existingData.push({
              id: this.id,
              title: this.title,
              stock: this.stock,
              image: this.image,
              price: this.price,
              sellingPrice: this.sellingPrice,
              subtotal: this.subtotal,
              total: this.total,
              qty: this.inputValue,
              checked: false,
            });
          }
      } else {
        // Jika belum ada data di local storage, tambahkan sebagai elemen pertama
        existingData.push({
          id: this.id,
          title: this.title,
          stock: this.stock,
          image: this.image,
          price: this.price,
          sellingPrice: this.sellingPrice,
          subtotal: this.subtotal,
          total: this.total,
          qty: this.inputValue,
          checked: false,
        });
      }

      // Simpan data ke local storage
      localStorage.setItem('cartData', JSON.stringify(existingData));
      this.cartService.setCartCount(existingData.length);
      this.inputValue = 0;
      this.subtotal = '-';
      this.total = '-';
      this.toastr.info(`${this.title.toLowerCase()} telah dimasukan ke keranjang`, 'Selamat');
    }
  }
}
