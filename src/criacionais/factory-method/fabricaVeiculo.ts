import { IVeiculo } from "./iveiculo";

export default abstract class FabricaVeiculo {
  private veiculo: IVeiculo;
  abstract criaVeiculo(): IVeiculo;

  apresentarVeiculo() {
    this.veiculo = this.criaVeiculo();
    this.veiculo.apresentar;
  }
}
