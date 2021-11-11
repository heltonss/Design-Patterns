import Carro from "./carro";
import CriaVeiculo from "./fabricaVeiculo";
import { IVeiculo } from "./iveiculo";
import Moto from "./moto";

export default class CriaMoto extends CriaVeiculo {
  criaVeiculo(): IVeiculo {
    return new Moto(600, 200);
  }
}
