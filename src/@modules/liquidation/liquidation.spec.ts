import { TestBed } from '@angular/core/testing';

import { LiquidationService } from './liquidation.service';

describe('CurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiquidationService = TestBed.get(LiquidationService);
    expect(service).toBeTruthy();
  });
});
