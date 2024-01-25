import { TestBed } from '@angular/core/testing';

import { BookAnAppointmentService } from './book-an-appointment.service';

describe('BookAnAppointmentService', () => {
  let service: BookAnAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAnAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
