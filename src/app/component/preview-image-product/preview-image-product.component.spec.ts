import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewImageProductComponent } from './preview-image-product.component';

describe('PreviewImageProductComponent', () => {
  let component: PreviewImageProductComponent;
  let fixture: ComponentFixture<PreviewImageProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewImageProductComponent]
    });
    fixture = TestBed.createComponent(PreviewImageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
