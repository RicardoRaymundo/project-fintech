import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletagemListComponent } from './boletagem-list.component';

describe('CurrencyListComponent', () => {
  let component: BoletagemListComponent;
  let fixture: ComponentFixture<BoletagemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletagemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
