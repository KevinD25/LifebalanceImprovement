import { TestBed } from '@angular/core/testing';

import { CalendarEventService } from './calendar-event.service';

describe('CalendarEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarEventService = TestBed.get(CalendarEventService);
    expect(service).toBeTruthy();
  });
});
