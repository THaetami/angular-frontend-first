import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  constructor(
    private sidebarService: SidebarService,
    private location: Location
  ) { }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }

  goBack(): void {
    this.location.back();
  }

}
