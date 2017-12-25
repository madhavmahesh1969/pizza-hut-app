import { TestBed, inject } from '@angular/core/testing';

import { MenuCartService } from './menu-cart.service';

describe('MenuCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuCartService]
    });
  });

  it('should be created', inject([MenuCartService], (service: MenuCartService) => {
    expect(service).toBeTruthy();
  }));
});
