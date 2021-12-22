import FonteDeDados from "./fonteDeDados";

export default class FonteDadosDecorator implements FonteDeDados {
    protected wrapper:FonteDeDados;
    
    constructor(fonte: FonteDeDados){
        this.wrapper = fonte
    }

    gravarDados(data: string): void {
        this.wrapper.gravarDados(data)
    }
    lerDados(): string {
        return this.wrapper.lerDados();
    }
    
}