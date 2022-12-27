export interface ConstrutorDeAvioes {
    reset(): any;
    setMotor(motor: string): any;
    setAsa(asa: string): any;
    setComputador(computador: string): any
    setTamanho(tamanho: number): any
    setChassi?(bool: boolean): any
}