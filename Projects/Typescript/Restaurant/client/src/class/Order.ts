export default class Order {
  static time(arg0: (this: any) => void, time: number) {
    throw new Error("Method not implemented.");
  }
  id: string;
  name: string;
  time: number;

  constructor(id: string, name: string, time: number) {
    this.id = id;
    this.name = name;
    this.time = time;
  }
}
