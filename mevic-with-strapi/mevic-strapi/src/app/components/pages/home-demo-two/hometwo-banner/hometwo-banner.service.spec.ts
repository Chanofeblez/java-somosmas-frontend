import { TestBed } from '@angular/core/testing';

import { HometwoBannerService } from './hometwo-banner.service';

describe('HometwoBannerService', () => {
  let service: HometwoBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HometwoBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
