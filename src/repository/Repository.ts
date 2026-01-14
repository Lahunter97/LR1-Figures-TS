import Shape from "../entities/Shape.ts";
import { Specification } from "../specifications/Specifications.ts";
import { Comparator } from "../comparators/Comparator.ts";


export class Repository {
    private figures: Shape[] = [];

    add(shape : Shape): void {
        this.figures.push(shape);
    }

    remove(id : string): void {
        this.figures = this.figures.filter(s => s.id !== id);
    }
    
    getAll(): Shape[] {
        return this.figures;
    }

    getById(id : string): Shape | undefined {
        return this.figures.find( d => d.id === id)
    }

    getByName(name : string): Shape[] {
        return this.figures.filter(s => s.name === name)
    }



    
    query(spec : Specification<Shape>): Shape[] {
        return this.figures.filter(f => spec.isSatisfiedBy(f))
    }


    getAllSorted(comparator : Comparator<Shape>): Shape[] {

        const copy_all = this.getAll().slice() // === [...this.getAll()]
        copy_all.sort((a,b) => comparator.compare(a,b))
        return copy_all
    }
}