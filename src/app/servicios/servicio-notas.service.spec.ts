import { TestBed } from '@angular/core/testing';

import { ServicioNotasService } from './servicio-notas.service';

describe('SservicioNotasService', () => {
  let service: ServicioNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
