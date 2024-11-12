import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbrandsComponent } from './productbrands.component';

describe('ProductbrandsComponent', () => {
  let component: ProductbrandsComponent;
  let fixture: ComponentFixture<ProductbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
