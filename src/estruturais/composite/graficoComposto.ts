import Grafico from "./grafico";

export default class GraficoComposto implements Grafico {
  x: any;
  y: any;
  graficos: Grafico[] = [];

  adicionar(grafico: Grafico) {
    this.graficos.push(grafico);
  }

  remover(grafico: Grafico) {
    this.graficos = this.graficos.filter((g) => {
      return g.x !== grafico.x && g.y !== grafico.y;
    });
  }

  move(x: number, y: number) {
    this.graficos.forEach((element) => {
      console.log(element.move(x, y));
    });
  }

  draw(): void {
    this.graficos.forEach((element) => {
      console.log(element.draw());
    });
  }
}
