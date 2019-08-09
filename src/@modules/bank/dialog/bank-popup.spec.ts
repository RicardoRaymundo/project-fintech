import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPopupComponent } from './bank-popup.component';

describe('CurrencyPopupComponent', () => {
  let component: BankPopupComponent;
  let fixture: ComponentFixture<BankPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
