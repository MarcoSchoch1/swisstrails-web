import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailDetail } from './trail-detail';

describe('TrailDetail', () => {
  let component: TrailDetail;
  let fixture: ComponentFixture<TrailDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TrailDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
