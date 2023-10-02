import { Component, Input } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-preview-image-product',
  templateUrl: './preview-image-product.component.html',
  styleUrls: ['./preview-image-product.component.css']
})
export class PreviewImageProductComponent {
  imageDumy: any[] = [];
  @Input() currentImage: string = '';
  selectedImage: string | null = null;

  constructor(
      //
    ) {
      for (let i = 1; i <= 10; i++) {
        const image = faker.image.urlLoremFlickr({ width:250, height:250, category: 'product' })
        const item = {
          image,
        };
        this.imageDumy.push(item);
      }
  }

  slideConfig = {
    "slidesToShow": 4,
    "slideToScroll": 4,
    "autoplay": false,
    "infinite": false,
    "arrows": true,
  }

  changeImage(newImage: string) {
    this.currentImage = newImage;
    this.selectedImage = newImage;
  }
}
