import { SERVING, READY } from "../constant/const";

export default class Server {
  name: string;
  time: number;
  status: string;
  isAvailable = () => this.status === READY;
  finishServing = () => (this.status = READY);
  serveAsync = () => {
    this.status = SERVING;
    return new Promise<Server>(
      function (this: any, resolve: any) {
        // this?
        this.resolve = resolve;

        setTimeout(_completeServe.bind(this), this.time);
      }.bind(this)
    );
  };

  constructor(name: string, time: number) {
    this.name = name;
    this.time = time;
    this.status = READY;
  }
}

function _completeServe(this: any) {
  this.status = READY;
  this.resolve();
}
