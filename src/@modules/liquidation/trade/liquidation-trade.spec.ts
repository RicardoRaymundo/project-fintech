import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationTradeComponent } from './liquidation-trade.component';

describe('CurrencyListComponent', () => {
  let component: LiquidationTradeComponent;
  let fixture: ComponentFixture<LiquidationTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
