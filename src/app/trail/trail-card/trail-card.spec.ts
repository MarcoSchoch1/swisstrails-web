import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailCard } from './trail-card';

describe('TrailCard', () => {
  let component: TrailCard;
  let fixture: ComponentFixture<TrailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TrailCard);
    fixture.componentInstance.trail = {id: 1, name: 'Aletsch Panoramaweg', lengthKm: 15.4, elevation: 300, difficulty: 'moderate', checkpointNames: []};
    fixture.detectChanges();
  });

  it('render the trail name', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h3')?.textContent).toContain('Aletsch Panoramaweg')
    expect(component).toBeTruthy();
  });
});
