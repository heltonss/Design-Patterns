import AviaoAirbus from "./AviaoAirbus";
import { ConstrutorDeAvioes } from "./ConstrutorDeAvioes";

export default class ConstrutorAviaoAirbus implements ConstrutorDeAvioes {
  private aviaoAirbus: AviaoAirbus;

  reset() {
    this.aviaoAirbus = new AviaoAirbus();
  }
  setMotor(motor: string) {
    this.aviaoAirbus.motor = motor;
  }
  setAsa(asa: string) {
    this.aviaoAirbus.asa = asa;
  }
  setComputador(computador: string) {
    this.aviaoAirbus.computador = computador;
  }
  setTamanho(tamanho: number) {
    this.aviaoAirbus.tamanho = tamanho;
  }

  setChassi(value: boolean) {
    this.aviaoAirbus.chassi = value
  }

  getAirbus() {
    const aviao = this.aviaoAirbus;
    this.reset();
    return aviao;
  }
}
