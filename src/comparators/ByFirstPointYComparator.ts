import { Comparator } from "./Comparator.ts";
import Shape from "../entities/Shape.ts";


export class ByFirstPointYComparator implements Comparator <Shape> {
    
    compare(a: Shape, b: Shape): number {

        const ay = a.getPoints()[0].y
        const by = b.getPoints()[0].y

        if (ay === by) {
            return 0
        } else if (ay < by){
            return -1
        } else
            return 1
    } 
}