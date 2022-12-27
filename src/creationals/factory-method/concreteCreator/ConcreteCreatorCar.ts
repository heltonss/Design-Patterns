import FactoryVehicle from "../CreatorVehicle";
import CarProduct from "../products/CarProduct";

export default class ConcreteCreateCar extends FactoryVehicle {
  createVehicle(): CarProduct {
    return new CarProduct("maverick","red", "v8", 220, 2);
  }
}
