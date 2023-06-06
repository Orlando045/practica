/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Watch.serviceService } from './watch.service.service';

describe('Service: Watch.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Watch.serviceService]
    });
  });

  it('should ...', inject([Watch.serviceService], (service: Watch.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
