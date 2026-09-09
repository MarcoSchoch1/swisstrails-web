import { Component, inject } from '@angular/core';
import { TrailCard } from '../trail-card/trail-card';
import { Trail } from '../trail';
import { TrailStateService } from '../trail-state-service';

@Component({
  imports: [TrailCard],
  selector: 'app-trail-list',
  styleUrl: './trail-list.scss',
  templateUrl: './trail-list.html',
})
export class TrailList {
  private trailState = inject(TrailStateService);
  trails = this.trailState.getAll();

  handleLog(trailId: number) {
    console.log(trailId);
  }
}
