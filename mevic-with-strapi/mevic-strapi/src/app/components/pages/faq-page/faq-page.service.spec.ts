import { TestBed } from '@angular/core/testing';

import { FaqPageService } from './faq-page.service';

describe('FaqPageService', () => {
  let service: FaqPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
