import CreateCar from "./concreteCreator/ConcreteCreatorCar";
import CreateMotorcycle from "./concreteCreator/ConcreteCreatorMotorcycle";
import CreatorVehicle from "./CreatorVehicle";


class Main {
  private veiculo: CreatorVehicle;
  constructor() {
    if (process.argv.includes("car")) {
      this.veiculo = new CreateCar();
    } else {
      this.veiculo = new CreateMotorcycle();
    }
  }

  init() {
    console.info(this.veiculo.createVehicle())
    console.info(this.veiculo.createVehicle().show())
    console.info(this.veiculo.createVehicle().drive())
  }
}

new Main().init();
