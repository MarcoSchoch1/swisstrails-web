import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailStateService } from '../../service/trail-state-service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-trail-detail',
  styleUrl: './trail-detail.scss',
  templateUrl: './trail-detail.html',
})

export class TrailDetail {
  private route = inject(ActivatedRoute);
  private trailStateService = inject(TrailStateService)
  trailId = Number(this.route.snapshot.paramMap.get('id'));
  trail$ =this.trailStateService.get(this.trailId);
}
