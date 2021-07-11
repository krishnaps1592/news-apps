import { TestBed } from '@angular/core/testing';

import { NewsServicService } from './news-servic.service';

describe('NewsServicService', () => {
  let service: NewsServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
