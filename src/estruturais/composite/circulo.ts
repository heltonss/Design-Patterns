import Grafico from "./grafico";
import Ponto from "./ponto";

export default class Circulo extends Ponto {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.x = x;
    this.y, y;
    this.radius = radius;
  }

  move(x: number, y: number): { y: number; x: number; } {
    this.x += x;
    this.y += y;
    return { y: this.y , x: this.x }
  }
 
  draw(): void {
    console.log(`desenha o circulo na posição x:${this.x} e y:${this.y}`);
  }
}
