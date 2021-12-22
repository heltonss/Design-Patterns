import FonteDeDados from "./fonteDeDados";

export default class FonteDadosArquivo implements FonteDeDados {
    private dados: string;

    constructor(data: string){
        this.dados = data
    }
    
    gravarDados(data: string): void {
        this.dados += data 
    }

   lerDados(): string {
        return this.dados
    }
}