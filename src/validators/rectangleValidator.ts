import ValidationError from '../errors/ValidationError.ts';

export function validateRectangleCoordinates(nums: number[]): void {
  if (nums.length < 8) {
    // if regular behavior -> we can add 0/1 to factory
    // but validator doesn't like -> logging and skip the line
    throw new ValidationError('Not enough coordinates for rectangle (need 8 numbers)');
  }
}

export function validateAxisAligned(minX: number, maxX: number, minY: number, maxY: number): void {
  if (minX === maxX || minY === maxY) {
    throw new ValidationError('Degenerate rectangle (line-like)');
  }
}
