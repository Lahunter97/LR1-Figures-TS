import Shape from "../entities/Shape.ts";
import { Observer } from "./Observer.ts";
import { Warehouse } from "../warehouse/Warehouse.ts";
import { area, perimeter } from "../services/rectangleService.ts";
import { volume } from "../services/cubeService.ts";
import Rectangle from "../entities/Rectangle.ts";
import Cube from "../entities/Cube.ts";

export class MetricsObserver implements Observer {

    update(shape: Shape): void {
        const w = Warehouse.getInstance()

    if (shape instanceof Rectangle) {
      const A = area(shape);
      const P = perimeter(shape);
      w.set(shape.id, { area: A, perimeter: P });
      return;
    }

    if (shape instanceof Cube) {
      const V = volume(shape);
      w.set(shape.id, { volume: V });
      return;
    }
        
    }
}