import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from '../../reducer/sidebar.action';

import { AppState } from '../../reducer/app.state';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private store: Store<{ sidebar: AppState }>) {}

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  toggleSidebar() {
    this.store.dispatch(toggleSidebar()); // Ubah "toogleSidebar" menjadi "toggleSidebar"
  }

   toggleSidebarIfOpen() {
    this.sOpen$.pipe(
      take(1), // Hanya ambil satu nilai
      filter(isOpen => isOpen) // Hanya jalankan toggleSidebar jika isOpen$ adalah true
    ).subscribe(() => {
      this.store.dispatch(toggleSidebar());
    });
  }

}
