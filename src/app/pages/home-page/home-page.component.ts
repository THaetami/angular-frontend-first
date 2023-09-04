import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducer/app.state';
import { filter, take } from 'rxjs';
import { toggleSidebar } from '../../reducer/sidebar.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private store: Store<{ sidebar: AppState }>) {}

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);


  toggleSidebarIfOpen() {
    this.sOpen$.pipe(
      take(1), // Hanya ambil satu nilai
      filter(isOpen => isOpen) // Hanya jalankan toggleSidebar jika isOpen$ adalah true
    ).subscribe(() => {
      this.store.dispatch(toggleSidebar());
    });
  }
}
