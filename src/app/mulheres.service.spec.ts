import { TestBed } from '@angular/core/testing';

import { MulheresService } from './mulheres.service';

describe('MulheresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MulheresService = TestBed.get(MulheresService);
    expect(service).toBeTruthy();
  });
});
