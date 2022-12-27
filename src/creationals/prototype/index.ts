import Circulo from "./circulo";
import Forma from "./forma";
import Prototype from "./prototype";
import Retangulo from "./retangulo";

class Main {
  private formasOriginais: Forma[] = [];
  private formasClonadas: Prototype[] = [];
  private circulo: Circulo;
  private retangulo: Retangulo;

  constructor() {
    this.circulo = new Circulo({ radius: 20, x: 10, y: 10, color: "green" });
    this.formasOriginais.push(this.circulo);
    const circuloClonado = this.circulo.clone();
    this.formasClonadas.push(circuloClonado);

    this.retangulo = new Retangulo({
      largura: 40,
      altura: 20,
      x: 10,
      y: 10,
      color: "red",
    });
    this.formasOriginais.push(this.retangulo);
    const retanguloClonado = this.retangulo.clone();
    this.formasClonadas.push(retanguloClonado);
  }

  show() {
    console.log("formas originais");
    console.table(this.formasOriginais);
    console.log("formas clonadas");
    console.table(this.formasClonadas);
  }
}

const main = new Main();
main.show();
