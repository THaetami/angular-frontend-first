import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducer/app.state';
import { toggleSidebar } from 'src/app/reducer/sidebar.action';
import { filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private store: Store<{ sidebar: AppState }>) { }

  sOpen$ = this.store.select((state) => state.sidebar.isSidebar);

  toggleSidebarIfOpen() {
    this.sOpen$.pipe(
      take(1),
      filter(isOpen => isOpen)
    ).subscribe(() => {
      this.store.dispatch(toggleSidebar());
    });
  }
}
