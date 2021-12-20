import Circulo from "./circulo";
import Grafico from "./grafico";
import GraficoComposto from "./graficoComposto";
import Ponto from "./ponto";

//image editor
export default class Main {
  private graficoComposto: GraficoComposto;
  private grupo: GraficoComposto;

  constructor() {
    this.graficoComposto = new GraficoComposto();
    this.graficoComposto.adicionar(new Ponto(15, 30));
    this.graficoComposto.adicionar(new Circulo(10, 25, 5));
    this.graficoComposto.adicionar(new Circulo(1, 0, 5));
  }

  grupoSelecionado(componentes: Grafico[]) {
    this.grupo = new GraficoComposto();
    componentes.forEach((componente) => {
      this.grupo.adicionar(componente);
      this.graficoComposto.remover(componente);
    });

    this.graficoComposto.adicionar(this.grupo);
    this.graficoComposto.draw();
  }

  show() {
    const g = [new Ponto(15, 30)];
    this.grupoSelecionado(g);
    console.info("grupo: >>>", this.grupo);
    console.info("grafico composto: >>>", this.graficoComposto.graficos);
  }
}

const main = new Main();
main.show();
