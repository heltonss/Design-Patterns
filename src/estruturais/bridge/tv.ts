import Dispostivo from "./dispositivo";

export default class TV implements Dispostivo {
  private ligado: boolean;
  private volume = 20;
  private canal = 4;

  isLigado(): boolean {
    return this.ligado
  }
  ligar(): void {
    this.ligado = true;
    console.info("tv ligada");
  }
  desligar(): void {
    this.ligado = false;
    console.info("tv desligada");
  }
  setVolume(n: number): void {
    this.volume = n;
    console.info(`volume ${this.volume} `);
  }
  getVolume(): number {
    return this.volume;
  }
  setCanal(n: number): void {
    this.canal = n;
    console.info(`canal ${this.canal} `);
  }
  getCanal(): number {
    return this.canal;
  }
}
