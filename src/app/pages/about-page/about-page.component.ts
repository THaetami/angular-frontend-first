import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
    constructor(
    private sidebarService: SidebarService
  ) { }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }
}
