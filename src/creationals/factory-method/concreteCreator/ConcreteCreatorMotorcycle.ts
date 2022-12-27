
import CreatorVehicle from "../CreatorVehicle";
import MotorcycleProduct from "../products/MotorcycleProduct";
import Moto from "../products/MotorcycleProduct";

export default class ConcreteCreateMotorcycle extends CreatorVehicle {
  createVehicle(): MotorcycleProduct {
    return new Moto("Falcon", 600, 200, 2);
  }
}
