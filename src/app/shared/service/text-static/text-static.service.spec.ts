import { TestBed } from '@angular/core/testing';

import { TextStaticService } from './text-static.service';

describe('TextStaticService', () => {
  let service: TextStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
