import { TestBed, inject } from '@angular/core/testing';

import { StackoverflowsearchService } from './stackoverflowsearch.service';

describe('StackoverflowsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackoverflowsearchService]
    });
  });

  it('should ...', inject([StackoverflowsearchService], (service: StackoverflowsearchService) => {
    expect(service).toBeTruthy();
  }));
});
