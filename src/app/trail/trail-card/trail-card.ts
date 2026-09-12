import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Trail } from '../../models/trail';

@Component({
  imports: [RouterLink],
  selector: 'app-trail-card',
  styleUrl: './trail-card.scss',
  templateUrl: './trail-card.html',
})
export class TrailCard {
  @Input({ required: true }) trail!: Trail;
  @Input() visitCount = 0;
  @Output() logRequest = new EventEmitter<number>();

  onLogClick() {
    this.logRequest.emit(this.trail.id)
  }
}
