import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-detail-product-page',
  templateUrl: './detail-product-page.component.html',
  styleUrls: ['./detail-product-page.component.css']
})
export class DetailProductPageComponent {
  items: any[] = [];
  currentImage: string | undefined;
  selectedImage: string | null = null;
  selectedTab: number = 2;
  isCollapsed: boolean = true;

  constructor(
  ) {

    for (let i = 1; i <= 10; i++) {
      const image = faker.image.urlLoremFlickr({ width:250, height:250, category: 'product' })

      const item = {
        image,
      };

      this.items.push(item);
    }

    if (this.items.length > 0) {
      this.currentImage = this.items[0].image;
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

  showTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
