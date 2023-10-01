import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCredibilityComponent } from './shop-credibility.component';

describe('ShopCredibilityComponent', () => {
  let component: ShopCredibilityComponent;
  let fixture: ComponentFixture<ShopCredibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCredibilityComponent]
    });
    fixture = TestBed.createComponent(ShopCredibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
