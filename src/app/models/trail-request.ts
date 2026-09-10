export interface TrailRequest {
  name: string;
  lengthKm: number;
  elevation: number;
  difficulty: 'easy' | 'moderate' | 'difficult';
  checkpointNames: { name: string; elevationM: number }[];
}
