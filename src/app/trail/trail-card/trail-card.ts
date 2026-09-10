import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trail } from '../../models/trail';

@Component({
  imports: [],
  selector: 'app-trail-card',
  styleUrl: './trail-card.scss',
  templateUrl: './trail-card.html',
})
export class TrailCard {
  @Input({ required: true }) trail!: Trail;
  @Output() logRequest = new EventEmitter<number>();

  onLogClick() {
    this.logRequest.emit(this.trail.id)
  }
}
