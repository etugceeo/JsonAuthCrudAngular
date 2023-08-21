import { TestBed } from '@angular/core/testing';

import { UserlistingService } from './userlisting.service';

describe('UserlistingService', () => {
  let service: UserlistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
