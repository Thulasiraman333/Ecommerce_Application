import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocodepopupComponent } from './promocodepopup.component';

describe('PromocodepopupComponent', () => {
  let component: PromocodepopupComponent;
  let fixture: ComponentFixture<PromocodepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocodepopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocodepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
