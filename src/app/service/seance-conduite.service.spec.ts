import { TestBed } from '@angular/core/testing';

import { SeanceConduiteService } from './seance-conduite.service';

describe('SeanceConduiteService', () => {
  let service: SeanceConduiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeanceConduiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
