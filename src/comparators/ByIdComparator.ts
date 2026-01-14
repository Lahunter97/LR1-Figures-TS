import { Comparator } from "./Comparator.ts";
import Shape from "../entities/Shape.ts";


export class ByIdComparator implements Comparator <Shape> {

    compare(a: Shape, b: Shape): number {
        if (a.id === b.id) {
            return 0
        } else if (a.id < b.id) {
            return -1
        } else {
            return 1
        }
    }
}