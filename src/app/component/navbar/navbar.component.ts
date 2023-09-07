import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from '../../reducer/sidebar.action';

import { AppState } from '../../reducer/app.state';
import { filter, take } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private store: Store<{ sidebar: AppState }>,
    private route: ActivatedRoute
  ) { }

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  toggleSidebar() {
    this.store.dispatch(toggleSidebar()); // Ubah "toogleSidebar" menjadi "toggleSidebar"
  }

  isShow(): boolean {
    return this.route.snapshot.routeConfig?.path !== 'product';
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
