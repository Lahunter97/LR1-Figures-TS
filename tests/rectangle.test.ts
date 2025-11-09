import Point from '../src/entities/Point.ts';
import Rectangle from '../src/entities/Rectangle.ts';
import {
  area, perimeter, isRectangle, isSquare, isRhombus, isTrapezoid, isConvex, crossesExactlyOneAxisWithin,
} from '../src/services/rectangleService.ts';

describe('Rectangle service', () => {
  const r1 = new Rectangle('t1',
    new Point(0, 0), new Point(3, 0), new Point(3, 2), new Point(0, 2));

  test('area and perimeter', () => {
    expect(area(r1)).toBe(6);
    expect(perimeter(r1)).toBe(10);
  });

  test('type checks', () => {
    expect(isRectangle(r1)).toBe(true);
    expect(isConvex(r1)).toBe(true);
  });

  test('square vs rhombus vs trapezoid', () => {
    const sq = new Rectangle('sq',
      new Point(1, 1), new Point(3, 1), new Point(3, 3), new Point(1, 3));
    expect(isSquare(sq)).toBe(true);
    expect(isRhombus(sq)).toBe(true); // simplify
    expect(isTrapezoid(sq)).toBe(true); 
  });

  test('crosses exactly one axis within d', () => {
    const rTouchingY = new Rectangle('axisY',
      new Point(-0.5, 2), new Point(0.5, 2), new Point(0.5, 3), new Point(-0.5, 3));
    expect(crossesExactlyOneAxisWithin(rTouchingY, 1)).toBe(true);
    expect(crossesExactlyOneAxisWithin(rTouchingY, 0.1)).toBe(true);
  
    // cross Y, do not cross X,  X = 0.15
    // will be true for 0.1, because untill Y axis the distance is 0
    const rCrossYNearX = new Rectangle('crossYnearX',
      new Point(-0.5, 0.15), new Point(0.5, 0.15), new Point(0.5, 1.15), new Point(-0.5, 1.15));
    expect(crossesExactlyOneAxisWithin(rCrossYNearX, 1)).toBe(true);
    expect(crossesExactlyOneAxisWithin(rCrossYNearX, 0.1)).toBe(true);
  });
  
});
