import { TestBed } from '@angular/core/testing';

import { ModalPaymentResultService } from './modal-payment-result.service';

describe('ModalPaymentResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalPaymentResultService = TestBed.get(ModalPaymentResultService);
    expect(service).toBeTruthy();
  });
});
