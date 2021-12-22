import FonteDadosDecorator from "./fonteDadosDecorator";

export default class CompressorDecorator extends FonteDadosDecorator {

  gravarDados(data: string): void {
    this.wrapper.gravarDados(`${data}/zip`)  
  }

  lerDados(): string {
    return  this.wrapper.lerDados()
  }
}
