import ValidationError from '../errors/ValidationError.ts';

export function validatePositive(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) {
    throw new ValidationError(`${label} must be non-negative finite number`);
  }
}
