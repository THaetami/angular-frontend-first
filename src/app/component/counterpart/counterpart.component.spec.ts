import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartComponent } from './counterpart.component';

describe('CounterpartComponent', () => {
  let component: CounterpartComponent;
  let fixture: ComponentFixture<CounterpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterpartComponent]
    });
    fixture = TestBed.createComponent(CounterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
