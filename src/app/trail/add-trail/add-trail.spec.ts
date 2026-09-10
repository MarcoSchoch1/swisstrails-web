import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTrail } from './add-trail';

describe('AddTrail', () => {
  let component: AddTrail;
  let fixture: ComponentFixture<AddTrail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrail],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTrail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
