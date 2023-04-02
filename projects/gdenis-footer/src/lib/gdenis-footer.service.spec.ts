import { TestBed } from '@angular/core/testing';

import { GdenisFooterService } from './gdenis-footer.service';

describe('GdenisFooterService', () => {
  let service: GdenisFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdenisFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
