import { messages } from './../../sources/message';
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent {
  constructor(
    private sidebarService: SidebarService
  ) { }

  messages = [...messages];

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }
}
