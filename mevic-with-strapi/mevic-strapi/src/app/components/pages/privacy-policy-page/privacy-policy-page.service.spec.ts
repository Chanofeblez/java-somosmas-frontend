import { TestBed } from '@angular/core/testing';

import { PrivacyPolicyPageService } from './privacy-policy-page.service';

describe('PrivacyPolicyPageService', () => {
  let service: PrivacyPolicyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivacyPolicyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
