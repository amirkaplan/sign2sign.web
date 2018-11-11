import { TestBed, inject } from '@angular/core/testing';

import { LayoutsService } from './layouts.service';

describe('LayoutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutsService]
    });
  });

  it('should be created', inject([LayoutsService], (service: LayoutsService) => {
    expect(service).toBeTruthy();
  }));
});
