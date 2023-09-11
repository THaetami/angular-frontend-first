import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  items: any[] = [];

  itemGroups: any[][] = [];

  ngOnInit(): void {
    this.splitItemsIntoGroups();
  }

  constructor() {
    for (let i = 1; i <= 100; i++) {
      const id = i;
      const title = `${faker.commerce.productName()} [${i}]`;
      const description = faker.commerce.productDescription();
      const image = faker.image.urlLoremFlickr({ width:250, height:250, category: 'product' })
      const price = faker.commerce.price({ min: 10000, max: 100000, dec: 0 })
      const rate = (Math.floor(Math.random() * 5) + 1).toString();
      const qty = faker.number.int({ min: 0, max: 10000 })

      const item = {
        id,
        title,
        description,
        image,
        price,
        rate,
        qty,
      };

      this.items.push(item);
    }
  }

   isGrabbing = false;

  onElementClick() {
    this.isGrabbing = true;
  }

  splitItemsIntoGroups() {
    const groupSize = 7; // Ukuran kelompok (10 data per kelompok)
    for (let i = 0; i < this.items.length; i += groupSize) {
      const group = this.items.slice(i, i + groupSize);
      this.itemGroups.push(group);
    }
  }


  slideConfig = {
    "breakpoint": 845,
    "slidesToShow": 4,
    "slideToScroll": 4,
    "autoplay": false,
    "infinite": false,
    "responsive": [
      {
        "breakpoint": 993,
        "settings": {
          "arrows": false,
          "slidesToShow": 3,
          "slideScroll": 3,
        }
      },
      {
        "breakpoint": 1300,
        "settings": {
          "arrows": false,
          "slidesToShow": 3,
          "slideScroll": 3,
        }
      },
    ]
  }

}
