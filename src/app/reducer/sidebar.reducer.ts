// sidebar.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as SidebarActions from './sidebar.action'; // Pastikan nama file action sesuai dengan yang digunakan


// Definisikan initialState
const initialState: AppState = { isSidebar: false };

// Buat reducer
const _sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.toggleSidebar, (state) => ({ ...state, isSidebar: !state.isSidebar }))
);

// Ekspor reducer
export function sidebarReducer(state: AppState | undefined, action: any) {
  return _sidebarReducer(state, action);
}


