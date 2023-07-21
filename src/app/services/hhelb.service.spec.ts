import { TestBed } from '@angular/core/testing';

import { HhelbService } from './hhelb.service';

describe('HhelbService', () => {
  let service: HhelbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhelbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
