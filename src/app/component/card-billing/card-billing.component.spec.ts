import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBillingComponent } from './card-billing.component';

describe('CardBillingComponent', () => {
  let component: CardBillingComponent;
  let fixture: ComponentFixture<CardBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBillingComponent]
    });
    fixture = TestBed.createComponent(CardBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
