import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAuthComponent } from './sidebar-auth.component';

describe('SidebarAuthComponent', () => {
  let component: SidebarAuthComponent;
  let fixture: ComponentFixture<SidebarAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarAuthComponent]
    });
    fixture = TestBed.createComponent(SidebarAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
