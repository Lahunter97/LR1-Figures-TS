import logger from './logger/logger.ts';
import readLines from './io/fileReader.ts';
import ShapeFactory from './factory/ShapeFactory.ts';
import Rectangle from './entities/Rectangle.ts';
import {
  area, perimeter, isRectangle, isSquare, isRhombus, isTrapezoid, isConvex, crossesExactlyOneAxisWithin,
} from './services/rectangleService.ts';

function processRectangles() {
  const lines = readLines('./data/rectangles.txt');
  logger.info({ count: lines.length }, 'Read rectangle lines');

  for (const line of lines) {
    try {
      const shape = ShapeFactory.fromLine(line);
      if (!shape) continue;
      if (shape instanceof Rectangle) {
        const A = area(shape);
        const P = perimeter(shape);
        const rect = isRectangle(shape);
        const square = isSquare(shape);
        const rhomb = isRhombus(shape);
        const trap = isTrapezoid(shape);
        const convex = isConvex(shape);
        const cross1 = crossesExactlyOneAxisWithin(shape, 1); // d = 1 example

        logger.info({
          id: shape.id, A, P, rect, square, rhomb, trap, convex, cross1,
        }, 'Rectangle computed');
      } else {
        logger.warn({ line }, 'Not a rectangle line (maybe cube), skipping here');
      }
    } catch (e) {
      logger.warn({ err: (e as Error).message, line }, 'Skip bad line');
      // go to next line
    }
  }
}

processRectangles();
