import ValidationError from '../errors/ValidationError.ts';

const NUMBER_RE = /^-?\d+(\.\d+)?$/;

export function parseNumbers(parts: string[]): number[] {
  const nums: number[] = [];
  for (const p of parts) {
    if (!NUMBER_RE.test(p)) {
      throw new ValidationError(`Bad number token: "${p}"`);
    }
    nums.push(Number(p));
  }
  return nums;
}

export function isRectLine(parts: string[]): boolean {
  // expected: RECT id x1 y1 x2 y2 x3 y3 x4 y4
  return parts.length >= 10 && parts[0].toUpperCase() === 'RECT';
}

export function isCubeLine(parts: string[]): boolean {
  // expected: CUBE id x y z side
  return parts.length >= 6 && parts[0].toUpperCase() === 'CUBE';
}
