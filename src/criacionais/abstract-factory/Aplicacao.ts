import Botao from "./Botao";
import GUIFabrica from "./GUIFabrica";

export default class Aplicacao {
  private fabrica: GUIFabrica;
  private botao: Botao;

  constructor(fabrica: GUIFabrica) {
    this.fabrica = fabrica;
  }

  createUI() {
    this.botao = this.fabrica.criaBotao();
  }

  renderiza() {
    this.botao.renderiza();
    this.botao.acao();
  }
}
