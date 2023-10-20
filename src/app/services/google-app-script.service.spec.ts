import { TestBed } from '@angular/core/testing';

import { GoogleAppScriptService } from './google-app-script.service';

describe('GoogleAppScriptService', () => {
  let service: GoogleAppScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAppScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
