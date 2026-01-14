import Shape from './Shape.ts';
import Point from './Point.ts';

export default class Cube extends Shape {
  constructor(
    id: string,
    public readonly a: Point, // one peak
    public readonly side: number,
    name = 'CUBE',
  ) {
    super(id, name);
  }

  getPoints(): Point[] {
    return [
      this.a,
    ];
  }
}
