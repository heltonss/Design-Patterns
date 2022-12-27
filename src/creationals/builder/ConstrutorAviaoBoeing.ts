import AviaoBoeing from "./AviaoBoeing";
import { ConstrutorDeAvioes } from "./ConstrutorDeAvioes";

export default class ConstrutorAviaoBoeing implements ConstrutorDeAvioes {
  private aviaoBoeing: AviaoBoeing;

  reset() {
    this.aviaoBoeing = new AviaoBoeing();
  }
  setMotor(motor: string) {
    this.aviaoBoeing.motor =  motor;
  }
  setAsa(asa: string) {
    this.aviaoBoeing.asa = asa
  }
  setComputador(computador: string) {
    this.aviaoBoeing.computador = computador
  }
  setTamanho(tamanho: number) {
    this.aviaoBoeing.tamanho = tamanho
  }

  getBoeing() {
     const aviao = this.aviaoBoeing;
     this.reset();
     return aviao;
  }
}
