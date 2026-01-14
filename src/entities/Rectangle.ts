import Shape from './Shape.ts';
import Point from './Point.ts';

export default class Rectangle extends Shape {
  // based on description figures are parallel to the axes, simplify
  constructor(
    id: string,
    public readonly p1: Point,
    public readonly p2: Point,
    public readonly p3: Point,
    public readonly p4: Point,
    name = 'RECT',
  ) {
    super(id, name);
  }
  
  getPoints(): Point[] {
    return [
      this.p1,
      this.p2,
      this.p3,
      this.p4,
    ];
  }
}
