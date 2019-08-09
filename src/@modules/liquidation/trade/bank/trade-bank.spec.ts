import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBankComponent } from './trade-bank.component';

describe('CurrencyListComponent', () => {
  let component: TradeBankComponent;
  let fixture: ComponentFixture<TradeBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
