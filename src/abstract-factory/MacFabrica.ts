import Botao from "./Botao";
import GUIFabrica from "./GUIFabrica";
import MacBotao from "./MacBotao";

export default class MacFabrica implements GUIFabrica {
    
    criaBotao(): Botao {
        return new MacBotao(35, '#999')
    }

}