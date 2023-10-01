import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from '../../reducer/sidebar.action';

import { AppState } from '../../reducer/app.state';
import { filter, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';


interface Product {
  id: number;
  title: string;
  sellingPrice: string;
  image: string;
  subtotal: string;
  qty: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  products: Array<Product> = [];
  cart: number = 0;

  constructor(
    private store: Store<{ sidebar: AppState }>,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.loadDataFromLocalStorage();
    this.cartService.cartCount$.subscribe((count) => {
      this.cart = count;
    });
   }

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  toggleSidebar() {
    this.store.dispatch(toggleSidebar()); // Ubah "toogleSidebar" menjadi "toggleSidebar"
  }

  isShow(): boolean {
    const routePath = this.route.snapshot.routeConfig?.path;
    return routePath !== 'product' && routePath !== 'product/:id';
  }

  toggleSidebarIfOpen() {
    this.sOpen$.pipe(
      take(1), // Hanya ambil satu nilai
      filter(isOpen => isOpen) // Hanya jalankan toggleSidebar jika isOpen$ adalah true
    ).subscribe(() => {
      this.store.dispatch(toggleSidebar());
    });
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
}
