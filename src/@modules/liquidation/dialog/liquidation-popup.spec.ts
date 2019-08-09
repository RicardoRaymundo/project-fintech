import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationPopupComponent } from './liquidation-popup.component';

describe('CurrencyPopupComponent', () => {
  let component: LiquidationPopupComponent;
  let fixture: ComponentFixture<LiquidationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
