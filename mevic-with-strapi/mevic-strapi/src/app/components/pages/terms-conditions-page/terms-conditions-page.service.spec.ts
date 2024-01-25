import { TestBed } from '@angular/core/testing';

import { TermsConditionsPageService } from './terms-conditions-page.service';

describe('TermsConditionsPageService', () => {
  let service: TermsConditionsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsConditionsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
