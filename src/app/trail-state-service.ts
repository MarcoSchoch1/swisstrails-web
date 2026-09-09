import { Injectable, Service } from '@angular/core';
import { Trail } from './trail';

@Injectable({ providedIn: 'root'})
export class TrailStateService {
    private trails: Trail[] = [];

    getAll(): Trail[] {
        return this.trails;
    }

    add(trail: Trail): void {
        this.trails = [
            { id: 1, name: "Testtrail", lengthKm: 100.0, elevation: 500, difficulty: 'moderate', checkpoints:['Alphütte']},
            { id: 2, name: "Alpinsteg", lengthKm: 300.0, elevation: 1200, difficulty: 'difficult', checkpoints:['Alphütte', 'Bergspitze']},
        ]
    }
}
