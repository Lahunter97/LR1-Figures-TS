import { Metrics } from "./Metrics.ts";

export class Warehouse {

    private static instance: Warehouse;

    private constructor() {
        this.storage = new Map()
    }

    static getInstance(): Warehouse {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }

    private storage: Map <string, Metrics>
    

    set(id: string, metrics: Metrics){
        this.storage.set(id, metrics)
    }

    get(id: string): Metrics | undefined {
        return this.storage.get(id)
    }

    remove(id: string) {
        this.storage.delete(id)
    }


}