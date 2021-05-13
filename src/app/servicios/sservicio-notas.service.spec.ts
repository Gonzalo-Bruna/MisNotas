import { TestBed } from '@angular/core/testing';

import { SservicioNotasService } from './sservicio-notas.service';

describe('SservicioNotasService', () => {
  let service: SservicioNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SservicioNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
