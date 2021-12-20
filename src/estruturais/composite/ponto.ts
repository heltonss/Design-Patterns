import grafico from "./grafico";

export default class Ponto implements grafico {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
  
  draw(): void {
    console.log(`desenha o ponto nas posições x:${this.x} e y:${this.y}`);
  }
}
