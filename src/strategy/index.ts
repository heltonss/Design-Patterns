import Contexto from "./contexto";
import EstrategiaConcretaAdicionar from "./estrategiaConcretaAdicionar copy";
import EstrategiaConcretaMultiplicar from "./estrategiaConcretaMultiplicar";
import EstrategiaConcretaSubtrair from "./estrategiaConcretaSubtrair copy";

export class Main {
  type: string;
  valueA: number;
  valueB: number;
  contexto = new Contexto();

  constructor(type: string, valueA: number, valueB: number) {
    this.type = type;
    this.valueA = valueA;
    this.valueB = valueB;
  }

  init() {
    switch (this.type) {
      case "somar":
        this.contexto.setStrategia(new EstrategiaConcretaAdicionar());
        break;
      case "subtrair":
        this.contexto.setStrategia(new EstrategiaConcretaSubtrair());
        break;
      case "multiplicar":
        this.contexto.setStrategia(new EstrategiaConcretaMultiplicar());
        break;
      default:
        break;
    }

    console.info(`O resultado de ${this.type} é ${this.contexto.executaEstrategia(this.valueA, this.valueB)}`)
  }
}

new Main("multiplicar", 5, 5).init()