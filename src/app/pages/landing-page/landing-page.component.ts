import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(
    private sidebarService: SidebarService
  ) { }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }

}
