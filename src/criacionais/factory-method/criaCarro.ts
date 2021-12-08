import Carro from "./carro";
import CriaVeiculo from "./fabricaVeiculo";
import { IVeiculo } from "./iveiculo";

export default class CriaCarro extends CriaVeiculo {
  criaVeiculo(): IVeiculo {
    return new Carro("red", "v8", 220, 2);
  }
}
