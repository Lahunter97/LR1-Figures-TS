import Cube from '../entities/Cube.ts';
import { validatePositive } from '../validators/resultValidator.ts';

export function surfaceArea(c: Cube): number {
  const s = 6 * c.side * c.side;
  validatePositive(s, 'surfaceArea');
  return s;
}

export function volume(c: Cube): number {
  const v = c.side ** 3;
  validatePositive(v, 'volume');
  return v;
}

// is it cube? -> always true in this model
// because creating the cube through valid fabric
export function isCube(_: Cube): boolean {
  return true;
}

// Faundation on one of cordinate square
// If z peaks == 0 or (x==0 / y==0) consider yes
export function baseOnCoordinatePlane(c: Cube): boolean {
  return c.a.z === 0 || c.a.x === 0 || c.a.y === 0;
}
