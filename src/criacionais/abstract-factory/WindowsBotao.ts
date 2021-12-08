import Botão from "./Botao";
import Button from "./Botao";

export default class WindowsBotao implements Botão {
  tamanho: number;
  cor: string;

  constructor(tamanho: number, cor: string) {
    this.tamanho = tamanho;
    this.cor = cor;
  }

  renderiza(): void {
    console.info("renderizou um botão de windows ");
  }

  acao() {
    console.info("executou uma ação no windows");
  }
}
