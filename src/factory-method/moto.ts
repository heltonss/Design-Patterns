import { IVeiculo } from './iveiculo';

export default class Moto implements IVeiculo {
  private motor: string;
  private velocidadeMaxima: string;

  constructor(motor: number, velocidadeMaxima: number) {
    this.motor = `${motor}cc`;
    this.velocidadeMaxima = `${velocidadeMaxima}km`;
  }
    apresentar() {
        console.log(`informações da moto ${JSON.stringify(this)}`)
    }

}
