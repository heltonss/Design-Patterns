import RoundPeg from "./PinoRedondo"

export default class RoundRole {
    private radius: number
    constructor(radius: number) {
        this.radius = radius
    }

    getRaio(){
        return this.radius
    }

    encaixa(peg: RoundPeg): boolean {
        return this.getRaio() >=  peg.getraio();
    }
}