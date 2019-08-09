import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountComponent } from './bank-account.component';

describe('CurrencyListComponent', () => {
  let component: BankAccountComponent;
  let fixture: ComponentFixture<BankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
