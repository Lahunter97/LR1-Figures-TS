import Point from '../entities/Point.ts';
import Rectangle from '../entities/Rectangle.ts';
import Cube from '../entities/Cube.ts';
import { parseNumbers, isRectLine, isCubeLine } from '../validators/lineValidator.ts';
import { validateRectangleCoordinates } from '../validators/rectangleValidator.ts';
import { validateCubeSide } from '../validators/cubeValidator.ts';
import ParseError from '../errors/ParseError.ts';

export default class ShapeFactory {
  // to be simple one static method
  static fromLine(line: string) {
    const parts = line.trim().split(/\s+/);
    if (parts.length === 0 || parts[0].startsWith('#')) return null;

    if (isRectLine(parts)) {
      const [, id, ...rest] = parts;
      // rest expected 8 numbers
      const nums = parseNumbers(rest);
      validateRectangleCoordinates(nums);
      // defence from not enough
      while (nums.length < 8) nums.push(0);
      const [x1, y1, x2, y2, x3, y3, x4, y4] = nums;
      return new Rectangle(id, new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), new Point(x4, y4));
    }

    if (isCubeLine(parts)) {
      const [, id, xs, ys, zs, sides] = parts;
      const [x, y, z, side] = parseNumbers([xs, ys, zs, sides]);
      validateCubeSide(side);
      return new Cube(id, new Point(x, y, z), side);
    }

    throw new ParseError(`Unknown line format: "${line}"`);
  }
}
