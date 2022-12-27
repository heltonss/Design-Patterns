import { VehicleProduct } from "../interface/VehicleProduct";

export default class CarProduct implements VehicleProduct {

  constructor(private name: string, private color: string, private motor: string, private maximumSpeed: number, private amountOfPorts: number) {
    this.name = name;
    this.color = color;
    this.motor = motor;
    this.maximumSpeed = maximumSpeed;
    this.amountOfPorts = amountOfPorts;
  }

  show() {
    console.info(`info car ${JSON.stringify(this)}`)
  }

  drive(): void {
    console.info(`You are driving your vehicle ${this.name}`)
  }

}