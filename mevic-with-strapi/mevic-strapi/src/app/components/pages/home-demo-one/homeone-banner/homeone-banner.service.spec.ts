import { TestBed } from '@angular/core/testing';

import { HomeoneBannerService } from './homeone-banner.service';

describe('HomeoneBannerService', () => {
  let service: HomeoneBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeoneBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
