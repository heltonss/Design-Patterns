import Forma from "./forma";
import Prototype from "./prototype";

export default class Circulo extends Forma implements Prototype {
  private radius: number;

  constructor(source) {
    super(source);
    this.radius = source.radius;
  }

  clone(): Prototype {
    return new Circulo(this);
  }
}
