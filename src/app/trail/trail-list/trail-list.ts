import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrailCard } from '../trail-card/trail-card';
import { TrailStateService } from '../../service/trail-state-service';

@Component({
  imports: [TrailCard, RouterLink],
  selector: 'app-trail-list',
  styleUrl: './trail-list.scss',
  templateUrl: './trail-list.html',
})
export class TrailList implements OnInit {
  trailState = inject(TrailStateService);

  ngOnInit() {
    this.trailState.loadAll();
  }

  handleLog(trailId: number) {
    this.trailState.logVisit(trailId);
  }
}
