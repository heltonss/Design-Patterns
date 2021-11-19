import Botao from "./Botao";

export default class MacBotao implements Botao {
  tamanho: number;
  cor: string;

  constructor(tamanho: number, cor: string) {
    this.tamanho = tamanho;
    this.cor = cor;
  }

  acao(): void {
    console.info("executou uma ação no mac");
  }
  
  renderiza(): void {
    console.info("renderizou um botão do mac");
  }
}
