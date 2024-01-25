import { TestBed } from '@angular/core/testing';

import { WhyChooseUsService } from './why-choose-us.service';

describe('WhyChooseUsService', () => {
  let service: WhyChooseUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhyChooseUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
