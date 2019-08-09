import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationListComponent } from './liquidation-list.component';

describe('CurrencyListComponent', () => {
  let component: LiquidationListComponent;
  let fixture: ComponentFixture<LiquidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
