import ConstrutorAviaoAirbus from "./ConstrutorAviaoAirbus";
import ConstrutorAviaoBoeing from "./ConstrutorAviaoBoeing";
import Diretor from "./Diretor";

class Main {
  private diretor = new Diretor();
  private construtorAvioesBoeing: ConstrutorAviaoBoeing;
  private construtorAvioesAirbus: ConstrutorAviaoAirbus;
 

  constructor() {}

  criarBoeingCompanhiaAzul() {
    this.construtorAvioesBoeing = new ConstrutorAviaoBoeing();
    this.diretor.construtorDeBoeingDaCompanhiaAzul(this.construtorAvioesBoeing);
    const aviaoCompanhiaAzulBoeing = this.construtorAvioesBoeing.getBoeing();
    console.info(aviaoCompanhiaAzulBoeing);
  }
  criarBoeingCompanhiaLatam() {
    this.construtorAvioesBoeing = new ConstrutorAviaoBoeing();
    this.diretor.construtorDeBoeingDaCompanhiaLatam(this.construtorAvioesBoeing);
    const aviaoCompanhiaLatamBoeing = this.construtorAvioesBoeing.getBoeing();
    console.info(aviaoCompanhiaLatamBoeing);
  }
  criarAirbusCompanhiaLatam() {
    this.construtorAvioesAirbus = new ConstrutorAviaoAirbus()
    this.diretor.construtorDeAirbusDaCompanhiaLatam(this.construtorAvioesAirbus);
    const aviaoCompanhiaLatamAirbus = this.construtorAvioesAirbus.getAirbus()
    console.info(aviaoCompanhiaLatamAirbus);
  }
}

const main = new Main();
main.criarBoeingCompanhiaAzul();
main.criarBoeingCompanhiaLatam();
main.criarAirbusCompanhiaLatam();
