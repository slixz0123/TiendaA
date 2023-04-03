import { TestBed } from '@angular/core/testing';

import { RegisterUsrService } from './register-usr.service';

describe('RegisterUsrService', () => {
  let service: RegisterUsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
