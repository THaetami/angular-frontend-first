import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AppState } from 'src/app/reducer/app.state';
import { toggleSidebar } from 'src/app/reducer/sidebar.action';

@Component({
  selector: 'app-sidebar-auth',
  templateUrl: './sidebar-auth.component.html',
  styleUrls: ['./sidebar-auth.component.css']
})
export class SidebarAuthComponent {
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
