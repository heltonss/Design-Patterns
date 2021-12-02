import { Estrategia } from "./estrategia";

export default class Contexto {

    private estrategia: Estrategia
    
    setStrategia(estrategia:Estrategia){
        this.estrategia = estrategia
    }

    executaEstrategia(a: number, b: number): number {
        return this.estrategia.executar(a,b)
    }
}