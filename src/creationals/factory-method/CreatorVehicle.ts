import { VehicleProduct } from "./interface/VehicleProduct";

export default abstract class CreatorVehicle {
  abstract createVehicle():VehicleProduct;
}
