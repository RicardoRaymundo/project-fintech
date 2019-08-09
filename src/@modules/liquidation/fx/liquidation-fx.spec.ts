import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationFxComponent } from './liquidation-fx.component';

describe('CurrencyListComponent', () => {
  let component: LiquidationFxComponent;
  let fixture: ComponentFixture<LiquidationFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
