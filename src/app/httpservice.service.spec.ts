import { TestBed, inject } from '@angular/core/testing';

import { HttpCommonService } from './httpservice.service';

describe('HttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCommonService]
    });
  });

  it('should be created', inject([HttpCommonService], (service: HttpCommonService) => {
    expect(service).toBeTruthy();
  }));
});
