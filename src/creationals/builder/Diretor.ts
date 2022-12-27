import { ConstrutorDeAvioes } from "./ConstrutorDeAvioes";

export default class Diretor {
  private construtor: ConstrutorDeAvioes;

  setConstrutor(construtor: ConstrutorDeAvioes) {
    this.construtor = construtor;
  }

  construtorDeBoeingDaCompanhiaAzul(construtor: ConstrutorDeAvioes) {
    construtor.reset();
    construtor.setAsa("asa sem trem de pouso");
    construtor.setMotor("maza")
    construtor.setTamanho(14000)
    construtor.setComputador("intel")
  }

  construtorDeBoeingDaCompanhiaLatam(construtor: ConstrutorDeAvioes) {
    construtor.reset();
    construtor.setAsa("asa sem trem de pouso");
    construtor.setMotor("mitsui")
    construtor.setTamanho(17000)
    construtor.setComputador("amd")
  }

  construtorDeAirbusDaCompanhiaLatam(construtor: ConstrutorDeAvioes) {
    construtor.reset();
    construtor.setAsa("asa com trem de pouso");
    construtor.setMotor("mitsui")
    construtor.setChassi(false)
    construtor.setTamanho(10000)
    construtor.setComputador("amd")
  }
}
