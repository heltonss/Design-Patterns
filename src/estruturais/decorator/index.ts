import CompressorDecorator from "./CompressorDecorator";
import EncriptadorDecorator from "./EncriptadorDecorator";
import FonteDadosArquivo from "./fonteDadosArquivo";
import FonteDeDados from "./fonteDeDados";

export default class Main {
  private fonte: FonteDeDados;

  constructor() {
    this.fonte = new FonteDadosArquivo("doc ");
    this.fonte.gravarDados("novos dados inseridos ");

    this.fonte = new CompressorDecorator(this.fonte);
    this.fonte.gravarDados("dados comprimidos ");

    this.fonte = new EncriptadorDecorator(this.fonte);
    this.fonte.gravarDados(" dados encriptados ");
  }

  show(): void {
    console.info(this.fonte.lerDados());
  }
}

const main = new Main();
main.show();
