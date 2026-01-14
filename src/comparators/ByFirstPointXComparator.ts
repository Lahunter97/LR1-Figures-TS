import { Comparator } from "./Comparator.ts";
import Shape from "../entities/Shape.ts";


export class ByFirstPointXComparator implements Comparator <Shape> {
    
    compare(a: Shape, b: Shape): number {

        const ax = a.getPoints()[0].x
        const bx = b.getPoints()[0].x

        if (ax === bx) {
            return 0
        } else if (ax < bx) {
            return -1
        } else
            return 1
    } 
}