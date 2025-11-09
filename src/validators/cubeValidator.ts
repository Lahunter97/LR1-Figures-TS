import ValidationError from '../errors/ValidationError.ts';

export function validateCubeSide(side: number): void {
  if (side <= 0) throw new ValidationError('Cube side must be > 0');
}
