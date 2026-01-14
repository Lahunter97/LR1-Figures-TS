import logger from './logger/logger.ts';
import readLines from './io/fileReader.ts';
import ShapeFactory from './factory/ShapeFactory.ts';
import Rectangle from './entities/Rectangle.ts';
import { Repository } from './repository/Repository.ts';
import { ByNameSpec, FirstQuadrantSpec } from './specifications/Specs.ts';
import {
  area, perimeter, isRectangle, isSquare, isRhombus, isTrapezoid, isConvex, crossesExactlyOneAxisWithin,
} from './services/rectangleService.ts';

function processRectangles() {
  const lines = readLines('./data/cubes.txt');
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

//processRectangles();


const Repo_test = new Repository()

const line_k1 = "RECT r1 0 0  3 0  3 2  0 2"
const line_k2 = "RECT r2 -2 -1  2 -1  2 1  -2 1"
const line_c = "CUBE c1 0 0 0 2"

const duck_1 = ShapeFactory.fromLine(line_k1)
const duck_2 = ShapeFactory.fromLine(line_k2)
const duck_3 = ShapeFactory.fromLine(line_c)

if (duck_1) Repo_test.add(duck_1)
if (duck_2) Repo_test.add(duck_2)
if (duck_3) Repo_test.add(duck_3)

console.log(Repo_test)
console.log(Repo_test.getAll())
console.log(Repo_test.getById("r1"))
console.log(Repo_test.getByName("RECT"))
console.log(Repo_test.getByName("CUBE"))


console.log(Repo_test.query(new ByNameSpec("RECT")))
console.log(Repo_test.query(new FirstQuadrantSpec()))