import { TestBed } from '@angular/core/testing';

import { TopHeaderService } from './top-header.service';

describe('TopHeaderService', () => {
  let service: TopHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
