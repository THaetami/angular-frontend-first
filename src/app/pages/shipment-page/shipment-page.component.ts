import { Component } from '@angular/core';

@Component({
  selector: 'app-shipment-page',
  templateUrl: './shipment-page.component.html',
  styleUrls: ['./shipment-page.component.css']
})
export class ShipmentPageComponent {
  isCollapse: boolean = true;

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

}
