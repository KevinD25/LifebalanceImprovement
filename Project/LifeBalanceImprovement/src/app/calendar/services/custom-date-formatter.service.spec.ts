import { TestBed } from '@angular/core/testing';

import { CustomDateFormatterService } from './custom-date-formatter.service';

describe('CustomDateFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDateFormatterService = TestBed.get(CustomDateFormatterService);
    expect(service).toBeTruthy();
  });
});
