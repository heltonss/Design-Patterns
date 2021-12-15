import Dispostivo from "./dispositivo";

export default class Radio implements Dispostivo {
  private ligado: boolean;
  private volume = 20;
  private estacao = 88.2;

  isLigado(): boolean {
    return this.ligado
  }

  ligar(): void {
    this.ligado = true;
    console.info("radio ligada");
  }
  desligar(): void {
    this.ligado = false;
    console.info("radio desligada");
  }
  setVolume(n: number): void {
    this.volume = n;
    console.info(`volume ${this.volume} `);
  }
  getVolume(): number {
    return this.volume;
  }
  setCanal(n: number): void {
    this.estacao = n;
    console.info(`estação ${this.estacao} `);
  }
  getCanal(): number {
    return this.estacao;
  }
}
