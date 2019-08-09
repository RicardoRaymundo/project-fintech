import { TestBed } from '@angular/core/testing';

import { BoletagemService } from './boletagem.service';

describe('CurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoletagemService = TestBed.get(BoletagemService);
    expect(service).toBeTruthy();
  });
});
