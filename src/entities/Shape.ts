import Point from "./Point.ts";
import { Observer } from "../observer/Observer.ts";


export default abstract class Shape {
    constructor(public readonly id: string, public readonly name: string) {}


    abstract getPoints(): Point[];



  
    private observers: Observer[] = []

    attach(observer: Observer): void {
      this.observers.push(observer)
    }

    detach(observer: Observer): void {
      this.observers = this.observers.filter(o => o !== observer)
    }

    notify(): void {
      this.observers.forEach(o => o.update(this))
    }


  }
  