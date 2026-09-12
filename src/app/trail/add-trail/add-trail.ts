import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TrailStateService } from '../../service/trail-state-service';
import { TrailRequest } from '../../models/trail-request';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-add-trail',
  styleUrl: './add-trail.scss',
  templateUrl: './add-trail.html',
})
export class AddTrail {
  private formBuilder = inject(FormBuilder);
  private trailService = inject(TrailStateService);

  trailForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lengthKm: [0.0, [Validators.required, Validators.min(0.1)]],
    elevation: [0, [Validators.required, Validators.nullValidator]],
    difficulty: ['moderate', [Validators.required]],
    checkpointNames: this.formBuilder.array([
      this.formBuilder.group({
        name: ['', Validators.required],
        elevationM: [0, Validators.required],
      }),])
  })

  onSubmit() {
    if (this.trailForm.invalid) return;
    this.trailService.add(this.trailForm.value as TrailRequest).subscribe();
  }

  get checkpointNames() {
    return this.trailForm.get('checkpointNames') as FormArray;
  }

  addCheckpoint() {
    this.checkpointNames.push(this.formBuilder.group({
      name: ['', Validators.required],
      elevationM: [0, Validators.required],
    }));
  }

  removeCheckpoint(index: number) {
    this.checkpointNames.removeAt(index);
  }
}
