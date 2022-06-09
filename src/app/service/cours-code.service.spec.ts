import { TestBed } from '@angular/core/testing';

import { CoursCodeService } from './cours-code.service';

describe('CoursCodeService', () => {
  let service: CoursCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
