import { Estrategia } from "./estrategia";

export default class EstrategiaConcretaSubtrair implements Estrategia {
    
    executar(a: number, b: number): number {
        return a - b
    }
}