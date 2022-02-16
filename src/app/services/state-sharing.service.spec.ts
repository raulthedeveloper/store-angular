import { TestBed } from '@angular/core/testing';

import { StateSharingService } from './state-sharing.service';

describe('StateSharingService', () => {
  let service: StateSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
