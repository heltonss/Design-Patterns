import Forma from "./forma";
import Prototype from "./prototype";

export default class Retangulo extends Forma implements Prototype {
  largura: number;
  altura: number;

  constructor(source) {
    super(source);
    this.largura = source.largura;
    this.altura = source.altura;
    this.color = source.color;
  }
  clone(): Prototype {
    return new Retangulo(this)
  }
}
