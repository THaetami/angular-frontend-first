import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  constructor(
    private sidebarService: SidebarService
  ) { }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }
}
