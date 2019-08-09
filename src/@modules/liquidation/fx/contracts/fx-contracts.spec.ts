import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxContractsComponent } from './fx-contracts.component';

describe('CurrencyListComponent', () => {
  let component: FxContractsComponent;
  let fixture: ComponentFixture<FxContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
