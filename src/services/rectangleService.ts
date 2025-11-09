import Rectangle from '../entities/Rectangle.ts';
import { validateAxisAligned } from '../validators/rectangleValidator.ts';
import { validatePositive } from '../validators/resultValidator.ts';

// receive bbox
function bbox(r: Rectangle) {
  const xs = [r.p1.x, r.p2.x, r.p3.x, r.p4.x];
  const ys = [r.p1.y, r.p2.y, r.p3.y, r.p4.y];
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  return { minX, maxX, minY, maxY };
}

// Axi oriented - opposite sites are paralel to axis
export function isRectangle(r: Rectangle): boolean {
  const { minX, maxX, minY, maxY } = bbox(r);
  try {
    validateAxisAligned(minX, maxX, minY, maxY);
    return true;
  } catch {
    return false;
  }
}

// convexity for an axis-oriented rectangle is always true unless degenerate
export function isConvex(r: Rectangle): boolean {
  return isRectangle(r);
}

export function area(r: Rectangle): number {
  const { minX, maxX, minY, maxY } = bbox(r);
  const a = (maxX - minX) * (maxY - minY);
  validatePositive(a, 'area');
  return a;
}

export function perimeter(r: Rectangle): number {
  const { minX, maxX, minY, maxY } = bbox(r);
  const p = 2 * ((maxX - minX) + (maxY - minY));
  validatePositive(p, 'perimeter');
  return p;
}

export function isSquare(r: Rectangle): boolean {
  const { minX, maxX, minY, maxY } = bbox(r);
  const w = maxX - minX;
  const h = maxY - minY;
  return w === h && w > 0;
}

// Rhombus for an axis-oriented rectangle is the same as a square
export function isRhombus(r: Rectangle): boolean {
  return isSquare(r);
}

// "trapezoid" test: both pairs of parallel pairs in a rectangle
// A classic rectangle is a special case of a trapezoid, 1 pair of parallel
// Return true 
export function isTrapezoid(r: Rectangle): boolean {
  return isRectangle(r);
}

// Shape intersect exactly 1 coordinate axis at a distance d?
// Interpretation of "at a given distance": if the closest point of bbox to the axis is <= d,
// and the rectangle "intersects/touches" exactly one of the axes (X or Y).
export function crossesExactlyOneAxisWithin(r: Rectangle, d: number): boolean {
  const { minX, maxX, minY, maxY } = bbox(r);
  const crossesX = (minY <= 0 && maxY >= 0);
  const crossesY = (minX <= 0 && maxX >= 0);

  // distance from bbox to Axis
  const distToX = (minY > 0) ? minY : (maxY < 0 ? -maxY : 0);
  const distToY = (minX > 0) ? minX : (maxX < 0 ? -maxX : 0);

  const closeEnough = (distToX <= d) || (distToY <= d);
  const exactlyOne = (crossesX ? 1 : 0) + (crossesY ? 1 : 0) === 1;
  return closeEnough && exactlyOne;
}
