import FonteDadosDecorator from "./fonteDadosDecorator";
import FonteDeDados from "./fonteDeDados";

export default class EncriptadorDecorator extends FonteDadosDecorator {
  gravarDados(data: string): void {
    this.wrapper.gravarDados(`${data}/encript`);
  }

  lerDados(): string {
    return this.wrapper.lerDados();
  }
}
