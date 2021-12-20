export default interface Grafico {
    move(x: number, y: number): void;
    draw(): void;
    x: number;
    y: number;
}