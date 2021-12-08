import Button from "./Botao";
import GUIFabrica from "./GUIFabrica";
import WindowsBotao from "./WindowsBotao";

export default class WindowsFabrica implements GUIFabrica {
    
    criaBotao(): Button {
        return new WindowsBotao(35, '#999')
    }

}