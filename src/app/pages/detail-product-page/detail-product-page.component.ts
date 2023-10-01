import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Products } from 'src/app/sources/product';


@Component({
  selector: 'app-detail-product-page',
  templateUrl: './detail-product-page.component.html',
  styleUrls: ['./detail-product-page.component.css']
})
export class DetailProductPageComponent implements OnInit {
  product: Products = {
    id: 0,
    title: '',
    description: '',
    image: '',
    price: '0',
    rate: '0',
    qty: 0,
    discount: 0,
    sellingPrice: '0',
    stock: 0,
  };
  currentImage: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {

  }

 ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const foundProduct = products.find(product => product.id === Number(id));
        if (foundProduct) {
          this.product = foundProduct;
          this.currentImage = foundProduct.image;
        }
      }
    });
 }
}
