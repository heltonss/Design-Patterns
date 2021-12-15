import Dispostivo from "./dispositivo";

export default class ControleRemoto {
  protected dispositivo: Dispostivo;

  constructor(dispositivo: Dispostivo) {
    this.dispositivo = dispositivo;
  }

  actionLigar() {
    if (this.dispositivo.isLigado()) {
      this.dispositivo.desligar();
    } else {
      this.dispositivo.ligar();
    }
  }

  aumentarVolume() {
    this.dispositivo.setVolume(this.dispositivo.getVolume() + 10);
  }

  baixarVolume() {
    this.dispositivo.setVolume(this.dispositivo.getVolume() - 10);
  }

  canalSobe() {
    this.dispositivo.setCanal(this.dispositivo.getCanal() + 1);
  }

  canalDesce() {
    this.dispositivo.setCanal(this.dispositivo.getCanal() - 1);
  }
}
