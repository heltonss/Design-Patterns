import PinoRedondo from "./PinoRedondo";
import PinoQuadrado from "./PinoQuadrado";

export default class  AdaptadorDePinoQuadrado extends PinoRedondo {
    private pinoQuadrado: PinoQuadrado;

    constructor(pino: PinoQuadrado) {
        super(pino.largura);
        this.pinoQuadrado =  pino
    }

    getRaio(){
        return this.pinoQuadrado.getLargura() * Math.sqrt(2) / 2;
    }
}