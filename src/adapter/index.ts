import PinoRedondo from "./PinoRedondo";
import BuracoDePinoRedondo from "./BuracoDePinoRedondo";
import AdaptadorDePinoQuadrado from "./AdaptadorDePinoQuadrado";
import PinoQuadrado from "./PinoQuadrado";

class Main {
  hole: BuracoDePinoRedondo;
  rpeg: PinoRedondo;
  small_sqpeg: PinoQuadrado;
  large_sqpeg: PinoQuadrado;
  small_sqpeg_adapter: AdaptadorDePinoQuadrado;
  large_sqpeg_adapter: AdaptadorDePinoQuadrado;

  constructor() {
    // vai funcionar
    this.hole = new BuracoDePinoRedondo(5);
    this.rpeg = new PinoRedondo(5);
    console.info(this.hole.encaixa(this.rpeg));

    this.small_sqpeg = new PinoQuadrado(5);
    this.large_sqpeg = new PinoQuadrado(10);
    // não vai funcionar pois são tipos incompativeis
    // this.hole.encaixa(this.small_sqpeg);

    //vai funcionar devido ao adaptador
    this.small_sqpeg_adapter = new AdaptadorDePinoQuadrado(this.small_sqpeg);
    this.large_sqpeg_adapter = new AdaptadorDePinoQuadrado(this.large_sqpeg);
    console.info(
      "pino quadrado encaixa agora",
      this.hole.encaixa(this.small_sqpeg_adapter)
    );
  }
}

new Main();
