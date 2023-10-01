import { messages } from './../../sources/message';
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent {
  constructor(
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }


  messages = [...messages];

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }

  isShow(): boolean {
    const routePath = this.route.snapshot.routeConfig?.path;
    return routePath !== 'message/:username';
  }

  goBack(): void {
    this.location.back();
  }
}
