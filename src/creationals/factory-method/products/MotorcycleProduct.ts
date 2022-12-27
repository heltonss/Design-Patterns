import { VehicleProduct } from "../interface/VehicleProduct";

export default class MotorcycleProduct implements VehicleProduct {

  constructor(private name: string, private motor: number, private maximumSpeed: number, private seats: number) {
    this.name = name;
    this.motor = motor;
    this.maximumSpeed = maximumSpeed;
    this.seats = seats;
  }

  show() {
    console.info(`info moto ${JSON.stringify(this)}`)
  }

  drive(): void {
    console.info(`You are riding your Motorcycle ${this.name}`)
  }

}
