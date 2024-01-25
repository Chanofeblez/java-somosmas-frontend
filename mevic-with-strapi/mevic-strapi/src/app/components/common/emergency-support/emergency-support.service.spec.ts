import { TestBed } from '@angular/core/testing';

import { EmergencySupportService } from './emergency-support.service';

describe('EmergencySupportService', () => {
  let service: EmergencySupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencySupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
