import ControleRemoto from "./controleRemoto";
import ControleRemotoSuper from "./controleRemotoSuper";
import Radio from "./radio";
import TV from "./tv";

export default class Main {
  private tv: TV;
  private radio: Radio;
  private controleRemotoTV: ControleRemoto;
  private controleRemotoRadio: ControleRemotoSuper;

  constructor() {
    this.tv = new TV();
    this.controleRemotoTV = new ControleRemoto(this.tv);
    this.radio = new Radio();
    this.controleRemotoRadio = new ControleRemotoSuper(this.radio);
  }

  acoesDaRadio() {
    const controle = this.controleRemotoRadio;
    controle.actionLigar();
    controle.aumentarVolume();
    controle.aumentarVolume();
    controle.aumentarVolume();
    controle.baixarVolume();
    controle.canalSobe();
    controle.canalSobe();
    controle.canalDesce();
    controle.mutar();
    controle.actionLigar()
    console.log('_______________________________----------------_______________________________')
  }
  acoesDaTV() {
    const controle = this.controleRemotoTV;
    controle.actionLigar();
    controle.aumentarVolume();
    controle.aumentarVolume();
    controle.aumentarVolume();
    controle.baixarVolume();
    controle.canalSobe();
    controle.canalSobe();
    controle.canalDesce();
    controle.actionLigar()
  }
}

const main = new Main();
main.acoesDaRadio()
main.acoesDaTV()
