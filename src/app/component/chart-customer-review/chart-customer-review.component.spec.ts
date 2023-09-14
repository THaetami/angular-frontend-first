import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCustomerReviewComponent } from './chart-customer-review.component';

describe('ChartCustomerReviewComponent', () => {
  let component: ChartCustomerReviewComponent;
  let fixture: ComponentFixture<ChartCustomerReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartCustomerReviewComponent]
    });
    fixture = TestBed.createComponent(ChartCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
