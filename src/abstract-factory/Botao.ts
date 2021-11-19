export default interface Botao {
    tamanho: number;
    cor: string,
    acao(): void,
    renderiza(): void;
}