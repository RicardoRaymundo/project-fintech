import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeWalletComponent } from './exchange-wallet.component';

describe('CurrencyListComponent', () => {
  let component: ExchangeWalletComponent;
  let fixture: ComponentFixture<ExchangeWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
