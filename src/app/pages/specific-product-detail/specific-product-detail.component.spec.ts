import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificProductDetailComponent } from './specific-product-detail.component';

describe('SpecificProductDetailComponent', () => {
  let component: SpecificProductDetailComponent;
  let fixture: ComponentFixture<SpecificProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
