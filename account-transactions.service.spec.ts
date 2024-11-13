import { TestBed } from '@angular/core/testing';

import { AccountTransactionsService } from './transaction.service';

describe('AccountTransactionsService', () => {
  let service: AccountTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
