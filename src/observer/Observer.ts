import type Shape from "../entities/Shape.ts"

export interface Observer {

    update(shape: Shape): void
}