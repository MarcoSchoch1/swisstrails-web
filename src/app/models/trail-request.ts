export interface TrailRequest {
  name: string;
  lengthKm: number;
  elevation: number;
  difficulty: 'easy' | 'moderate' | 'difficult';
  checkpoints: string[];
}
