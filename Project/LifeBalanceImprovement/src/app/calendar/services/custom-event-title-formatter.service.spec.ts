import { TestBed } from '@angular/core/testing';

import { CustomEventTitleFormatterService } from './custom-event-title-formatter.service';

describe('CustomEventTitleFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomEventTitleFormatterService = TestBed.get(CustomEventTitleFormatterService);
    expect(service).toBeTruthy();
  });
});
