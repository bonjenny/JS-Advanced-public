import { COOKING, READY } from "../constant/const";
import Order from "./Order";

export default class Chef {
  name: string;
  status: string;
  isAvailable = () => this.status === READY;
  finishCooking = () => (this.status = READY);
  cookAsync = (order: Order) => {
    this.status = COOKING;
    return new Promise<Chef>(
      function (this: any, resolve: any) {
        // this?
        this.resolve = resolve;

        setTimeout(_completeCook.bind(this), order.time);
      }.bind(this)
    );
  };

  constructor(name: string) {
    this.name = name;
    this.status = READY;
  }
}

function _completeCook(this: any) {
  this.status = READY;
  this.resolve();
}
