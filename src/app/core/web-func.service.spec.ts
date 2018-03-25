import { TestBed, inject } from '@angular/core/testing';

import { WebFuncService } from './web-func.service';

describe('WebFuncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebFuncService]
    });
  });

  it('should be created', inject([WebFuncService], (service: WebFuncService) => {
    expect(service).toBeTruthy();
  }));
});
