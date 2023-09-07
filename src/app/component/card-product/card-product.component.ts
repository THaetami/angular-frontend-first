import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  constructor() { }

   isGrabbing = false;

  onElementClick() {
    this.isGrabbing = true;
  }

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

  slideConfig = {
    "slidesToShow": 4,
    "slideToScroll": 4,
    "autoplay": false,
    "responsive": [
      {
        "breakpoint": 845,
        "settings": {
          "arrows": true,
          "slidesToShow": 2,
          "slideScroll": 2
        }
      },
    ]
  }

}
