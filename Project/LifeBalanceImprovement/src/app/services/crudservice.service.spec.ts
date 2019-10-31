import { TestBed } from '@angular/core/testing';

import { CRUDServiceService } from './crudservice.service';

describe('CRUDServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDServiceService = TestBed.get(CRUDServiceService);
    expect(service).toBeTruthy();
  });
});
