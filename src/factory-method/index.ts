import CriaCarro from "./CriaCarro";
import CriaMoto from "./criaMoto";
import FabricaVeiculo from "./fabricaVeiculo";

class Main {
  private veiculo: FabricaVeiculo;
  constructor() {
    if (process.argv.includes("carro")) {
      this.veiculo = new CriaCarro();
    } else {
      this.veiculo = new CriaMoto();
    }
  }

  init() {
    console.info(this.veiculo.apresentarVeiculo())
  }
}

new Main().init();
