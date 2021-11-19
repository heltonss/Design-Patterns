import Aplicacao from "./Aplicacao";
import MacFabrica from "./MacFabrica";
import WindowsFabrica from "./WindowsFabrica";

export default class Main {
  fabrica: MacFabrica | WindowsFabrica;
  aplicacao: Aplicacao;
  constructor() {
    if (process.argv.includes("windows")) {
      this.fabrica = new WindowsFabrica();
    } else {
      this.fabrica = new MacFabrica();
    }

    this.aplicacao = new Aplicacao(this.fabrica);
    this.aplicacao.createUI();
  }

  init() {
    this.aplicacao.renderiza();
  }
}

new Main().init();
