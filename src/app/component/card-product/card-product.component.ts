import { Component, OnInit } from '@angular/core';
// import { faker } from '@faker-js/faker';
import { products } from 'src/app/sources/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  items: any[] = [];
  products = [...products];

  itemGroups: any[][] = [];

  ngOnInit(): void {
    this.splitItemsIntoGroups();
  }

  constructor() {
    // membuat data products
    // for (let i = 1; i <= 100; i++) {
    //   const id = i;
    //   const title = `${faker.commerce.productName()} [${i}]`;
    //   const description = faker.commerce.productDescription();
    //   const image = faker.image.urlLoremFlickr({ width: 250, height: 250, category: 'product' });
    //   const priceHet = parseFloat(faker.commerce.price({ min: 10000, max: 100000, dec: 2 }));
    //   const price = Math.ceil(priceHet / 1000) * 1000;
    //   const rate = (Math.floor(Math.random() * 5) + 1).toString();
    //   const qty = faker.number.int({ min: 0, max: 10000 });
    //   const discount = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    //   const sellingPrice = Math.round((price * (100 - discount)) / 100);
    //   const stock = faker.number.int({ min: 20, max: 350 });

    //   // Format price and sellingPrice as Indonesian currency
    // const formattedPrice = price.toLocaleString('id-ID');
    // const formattedSellingPrice = sellingPrice.toLocaleString('id-ID');

    //   const item = {
    //     id,
    //     title,
    //     description,
    //     image,
    //     price: formattedPrice,
    //     rate,
    //     qty,
    //     discount,
    //     sellingPrice: formattedSellingPrice,
    //     stock,
    //   };

    //   this.items.push(item);
    // }
  }

  isGrabbing = false;

  onElementClick() {
    this.isGrabbing = true;
  }

  splitItemsIntoGroups() {
    const groupSize = 7; // Ukuran kelompok (7 data per kelompok)
    for (let i = 0; i < this.products.length; i += groupSize) {
      const group = this.products.slice(i, i + groupSize);
      this.itemGroups.push(group);
    }
  }

  // saveItemsToFile() {
  //   const fileContents = `export const articles: Article[] = ${JSON.stringify(this.items, null, 2)};`;
  //   const blob = new Blob([fileContents], { type: 'text/plain' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = '.ts';
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // }


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
