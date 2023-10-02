import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';


interface Product {
  id: number;
  title: string;
  price: string;
  stock: number;
  sellingPrice: string;
  total: string;
  subtotal: string;
  image: string;
  qty: number;
  checked: boolean;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  products: Array<Product> = [];
  subtotal: string = '-';
  total: string = '-';
  inputValue: number = 0;
  selectedSubtotal: string = '-';
  selectedTotal: string = '-';
  selectedQty: number = 0;

  constructor(
    private sidebarService: SidebarService,
    private location: Location,
    private cartService: CartService,
    private toastr: ToastrService,
  ) {
    this.loadDataFromLocalStorage();
  }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }

  goBack(): void {
    this.location.back();
  }

  loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('checkoutData');

    if (storedData) {
      const existingData = JSON.parse(storedData);

      if (Array.isArray(existingData) && existingData.length > 0) {
        this.products = existingData;
        this.cartService.setCartCount(this.products.length);
      }
    }
  }

  deleteItemFromLocalStorage(id: number) {
    const storedData = localStorage.getItem('checkoutData');

    if (storedData) {
      const existingData = JSON.parse(storedData);

      if (Array.isArray(existingData)) {
        // Cari indeks item yang memiliki ID yang sesuai
        const indexToRemove = existingData.findIndex((item: any) => item.id === id);

        if (indexToRemove !== -1) {
          // Hapus item dari array
          existingData.splice(indexToRemove, 1);

          // Simpan kembali data yang telah dihapus ke local storage
          localStorage.setItem('checkoutData', JSON.stringify(existingData));

          this.products.splice(indexToRemove, 1);
          this.cartService.setCartCount(this.products.length);
          this.countSubtotal();
          this.toastr.warning('barang telah dihapus dari keranjang', 'Perhatian', {
            positionClass: 'toast-top-center'
          })
        }
      }
    }
  }

  decrement(product: Product) {
    if (product.qty > 0) {
      product.qty--;

      this.calculatePrice(product);
      this.countSubtotal()
    }
  }

  increment(product: Product) {
    if (product.qty < product.stock) {
      product.qty++;

      this.calculatePrice(product);
      this.countSubtotal()
    }
  }

  onInputChange(product: Product) {
    if ( product.qty < 0) {
      product.qty = 0;
    }
    if (product.qty > product.stock) {
      product.qty = product.stock;
    }
    const isNumeric = /^[0-9]+$/.test(product.qty.toString());
    if (isNumeric) {

      this.calculatePrice(product);
      this.countSubtotal();
    }
  }

  updateQtyInLocalStorage(id: number, newQty: number) {
    const storedData = localStorage.getItem('checkoutData');

    if (storedData) {
        const existingData = JSON.parse(storedData);

        if (Array.isArray(existingData)) {
            // Cari indeks item yang memiliki ID yang sesuai
            const indexToUpdate = existingData.findIndex(
                (item: any) => item.id === id
            );

            if (indexToUpdate !== -1) {
                // Update qty item yang sesuai dengan ID
                existingData[indexToUpdate].qty = newQty;

                // Mengupdate total dan subtotal berdasarkan perubahan qty
                const priceWithoutSeparator = existingData[indexToUpdate].price.replace(/\./g, '').replace(',', '.');
                const priceNumber = parseFloat(priceWithoutSeparator);
                const sellingPriceWithoutSeparator = existingData[indexToUpdate].sellingPrice.replace(/\./g, '').replace(',', '.');
                const sellingPriceNumber = parseFloat(sellingPriceWithoutSeparator);
                const totalNumber = priceNumber * newQty;
                const subtotalNumber = sellingPriceNumber * newQty;


                // Update total dan subtotal dalam data produk
                existingData[indexToUpdate].total = 'Rp. ' + totalNumber.toLocaleString('id-ID');
                existingData[indexToUpdate].subtotal = 'Rp. ' + subtotalNumber.toLocaleString('id-ID');

                // Simpan kembali data yang telah diupdate ke local storage
                localStorage.setItem('checkoutData', JSON.stringify(existingData));
            }
        }
    }
  }


  calculatePrice(product: Product) {
    // Cek apakah qty adalah angka yang valid (positif)
    if (product.qty >= 0) {
      // Menghapus titik dan koma dari string harga
      const priceWithoutSeparator = product.price.replace(/\./g, '').replace(',', '.');
      const sellingPriceWithoutSeparator = product.sellingPrice.replace(/\./g, '').replace(',', '.');

      // Mengkonversi harga ke tipe data number
      const priceNumber = parseFloat(priceWithoutSeparator);
      const sellingPriceNumber = parseFloat(sellingPriceWithoutSeparator);

      // Menghitung total berdasarkan qty dan harga
      const totalNumber = priceNumber * parseFloat(product.qty.toString());

      // Menghitung subtotal berdasarkan qty dan harga jual
      const subtotalNumber = sellingPriceNumber * parseFloat(product.qty.toString());

      // Mengformat ulang total dan subtotal sebagai mata uang Indonesia
      product.total = 'Rp. ' + totalNumber.toLocaleString('id-ID');
      product.subtotal = 'Rp. ' + subtotalNumber.toLocaleString('id-ID');

      this.updateQtyInLocalStorage(product.id, product.qty);

    }
  }

  countSubtotal() {
    let totalSubtotal = 0;
    let total = 0;
    let qty = 0;

    // Loop variable products
    for (const product of this.products) {
      if (product.checked) {
        // Mengambil nilai subtotal dan total tanpa mata uang dan koma
        const subtotalWithoutCurrency = parseFloat(product.subtotal.replace(/[^0-9,-]/g, '').replace(',', '.'));
        const totalWithoutCurrency = parseFloat(product.total.replace(/[^0-9,-]/g, '').replace(',', '.'));

        totalSubtotal += subtotalWithoutCurrency;
        total += totalWithoutCurrency;
        qty += product.qty;
      }
    }

    // Mengubah totalSubtotal dan total ke string dengan format 'Rp. '
    this.selectedSubtotal = 'Rp. ' + totalSubtotal.toLocaleString('id-ID');
    this.selectedTotal = 'Rp. ' + total.toLocaleString('id-ID');
    this.selectedQty = qty;
  }

  checkAll(event: any) {
    const isChecked = event.target.checked;
    this.products.forEach(product => product.checked = isChecked);
    this.countSubtotal(); // Hitung ulang subtotal
  }
}
