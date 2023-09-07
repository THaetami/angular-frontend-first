import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AppState } from 'src/app/reducer/app.state';
import { toggleSidebar } from 'src/app/reducer/sidebar.action';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  constructor(private store: Store<{ sidebar: AppState }>) {}

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  items = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1',
      image: 'assets/image/yoona_lim.jpg',
      price: '23.000',
      rate: '4',
      qty: '12.000',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2',
      image: 'assets/image/joli.jpg',
      price: '90.000',
      rate: '4',
      qty: '2.000',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3',
      image: 'assets/image/tony_stark.jpg',
      price: '83.000',
      rate: '3',
      qty: '1.000',
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 3',
      image: 'assets/image/tony_stark.jpg',
      price: '67.000',
      rate: '3',
      qty: '900',
    },
    {
      title: 'Card 5',
      description: 'This is the description for Card 5',
      image: 'assets/image/yoona_lim.jpg',
      price: '23.000',
      rate: '4',
      qty: '12.000',
    },
    {
      title: 'Card 6',
      description: 'This is the description for Card 5',
      image: 'assets/image/yoona_lim.jpg',
      price: '23.000',
      rate: '4',
      qty: '12.000',
    },
    {
      title: 'Card 7',
      description: 'This is the description for Card 5',
      image: 'assets/image/yoona_lim.jpg',
      price: '23.000',
      rate: '4',
      qty: '12.000',
    },
  ];

  toggleSidebarIfOpen() {
    this.sOpen$.pipe(
      take(1), // Hanya ambil satu nilai
      filter(isOpen => isOpen) // Hanya jalankan toggleSidebar jika isOpen$ adalah true
    ).subscribe(() => {
      this.store.dispatch(toggleSidebar());
    });
  }
}
