export default interface Dispostivo {
    isLigado(): boolean;
    ligar(): void;
    desligar(): void;
    setVolume(n: number): void;
    getVolume(): number;
    setCanal(n: number): void;
    getCanal(): number;
}