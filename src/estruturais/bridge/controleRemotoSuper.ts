import ControleRemoto from "./controleRemoto";

export default class ControleRemotoSuper extends ControleRemoto {
  
    mutar() {
        this.dispositivo.setVolume(0)
    }
} 