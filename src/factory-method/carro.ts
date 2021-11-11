import { IVeiculo } from './iveiculo';

export default class Carro implements IVeiculo {
    private cor: string;
    private motor: string;
    private velocidadeMaxima: string;
    private quantidadeDePortas: number;
    
    constructor(cor: string, motor: string, velocidadeMaxima: number, quantidadeDePortas: number){
        this.cor = cor;
        this.motor = motor;
        this.velocidadeMaxima = `${velocidadeMaxima}km`;
        this.quantidadeDePortas = quantidadeDePortas;
    }
    apresentar() {
        console.info(`informações do carro ${JSON.stringify(this)}`)
    }

}