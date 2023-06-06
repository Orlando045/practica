/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WatchSelectedService } from './watch-selected.service';

describe('Service: WatchSelected', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchSelectedService]
    });
  });

  it('should ...', inject([WatchSelectedService], (service: WatchSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
