import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFeedComponent } from './review-feed.component';

describe('ReviewFeedComponent', () => {
  let component: ReviewFeedComponent;
  let fixture: ComponentFixture<ReviewFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewFeedComponent]
    });
    fixture = TestBed.createComponent(ReviewFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
