import { Comparator } from "./Comparator.ts";
import Shape from "../entities/Shape.ts";


export class ByNameComparator implements Comparator <Shape> {

    compare (a: Shape, b:Shape) : number {
// return a.name.localeCompare(b.name);

        if (a.name === b.name) {
            return 0;
        } else if (a.name > b.name) {
            return -1;
        } else {
            return 1
        }
    }
}