import { Estrategia } from "./estrategia";

export default class EstrategiaConcretaAdicionar implements Estrategia {
    
    executar(a: number, b: number): number {
        return a + b
    }
}