import { TestBed } from '@angular/core/testing';

import { CrudprodService } from './crudprod.service';

describe('CrudprodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudprodService = TestBed.get(CrudprodService);
    expect(service).toBeTruthy();
  });
});