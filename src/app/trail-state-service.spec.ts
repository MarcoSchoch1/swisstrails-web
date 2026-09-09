import { TestBed } from '@angular/core/testing';
import { TrailStateService } from './trail-state-service';

describe('TrailStateService', () => {
  let service: TrailStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
