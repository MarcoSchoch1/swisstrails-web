export interface Trail {
    id: number;
    name: String;
    lengthKm: number;
    elevation: number;
    difficulty: 'easy | moderate | difficult';
    checkpoints: string[];
}

function summerize(trail: Trail): string {
    return `${trail.name} (${trail.lengthKm} km)`;
}