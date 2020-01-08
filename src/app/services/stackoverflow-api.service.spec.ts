import { TestBed } from '@angular/core/testing';

import { StackoverflowApiService } from './stackoverflow-api.service';

describe('StackoverflowApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StackoverflowApiService = TestBed.get(StackoverflowApiService);
    expect(service).toBeTruthy();
  });
});
