import { Estrategia } from "./estrategia";

export default class EstrategiaConcretaMultiplicar implements Estrategia {
    
    executar(a: number, b: number): number {
        return a * b
    }
}