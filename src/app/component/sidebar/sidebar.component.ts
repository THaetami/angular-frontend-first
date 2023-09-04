import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar  } from '../../reducer/sidebar.action';

import { AppState } from '../../reducer/app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private store: Store<{ sidebar: AppState }>) {}

  isOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  toggleSidebar() {
    this.store.dispatch(toggleSidebar()); // Ubah "toogleSidebar" menjadi "toggleSidebar"
  }
}
