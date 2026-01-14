import Shape from "../entities/Shape.ts"
import { Specification } from "./Specifications.ts"


export class ByNameSpec implements Specification <Shape> {
    name : string;
    
    constructor (name : string) {
        this.name = name
    }

    isSatisfiedBy(item: Shape): boolean {
        return item.name === this.name
    }
}


export class FirstQuadrantSpec implements Specification <Shape> {
    
    isSatisfiedBy(item: Shape): boolean {
        const pts = item.getPoints()
        return pts.every(p => p.x >= 0 && p.y >= 0)
    }
}