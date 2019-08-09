import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTransactionsComponent } from './trade-transactions.component';

describe('CurrencyListComponent', () => {
  let component: TradeTransactionsComponent;
  let fixture: ComponentFixture<TradeTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
