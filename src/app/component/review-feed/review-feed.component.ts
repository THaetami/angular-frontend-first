import { Component } from '@angular/core';

@Component({
  selector: 'app-review-feed',
  templateUrl: './review-feed.component.html',
  styleUrls: ['./review-feed.component.css']
})
export class ReviewFeedComponent {
  isCollapsed: boolean = true;


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
