import { computed, inject, Injectable, Service, signal } from '@angular/core';
import { Trail } from '../models/trail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrailRequest } from '../models/trail-request';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root'})
export class TrailStateService {
    private http = inject(HttpClient)
    private baseUrl = `${environment.apiUrl}/trails`
    private trailsSingals = signal<Trail[]>([]);
    trails = this.trailsSingals.asReadonly();
    trailCount = computed(() => this.trailsSingals().length)

    private visitCountsSignal = signal<Record<number, number>>({});
    visitCounts = this.visitCountsSignal.asReadonly();

    logVisit(trailId: number) {
        this.visitCountsSignal.update(current => ({
            ...current,
            [trailId]: (current[trailId] ?? 0) + 1,
        }));
    }

    setTrails(trails: Trail[]) {
        this.trailsSingals.set(trails);
    }

    addTrails(trail: Trail) {
        this.trailsSingals.update(current => [...current, trail])
    }

    loadAll() {
        this.getAll().subscribe(trails => this.setTrails(trails));
    }

    getAll(): Observable<Trail[]> {
        return this.http.get<Trail[]>(this.baseUrl);
    }

    add(trail: TrailRequest): Observable<Trail> {
        return this.http.post<Trail>(this.baseUrl, trail)

        //this.trails = [
            //{ id: 1, name: "Testtrail", lengthKm: 100.0, elevation: 500, difficulty: 'moderate', checkpoints:['Alphütte']},
            //{ id: 2, name: "Alpinsteg", lengthKm: 300.0, elevation: 1200, difficulty: 'difficult', checkpoints:['Alphütte', 'Bergspitze']},
        //]
    }

    get(trailId: Number): Observable<Trail> {
        return this.http.get<Trail>(`${this.baseUrl}/${trailId}`)
    }
}
