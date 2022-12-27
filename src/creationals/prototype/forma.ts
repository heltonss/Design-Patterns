export default abstract class Forma {
  x: number;
  y: number;
  color: string;

  constructor(source: Forma) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }
}
