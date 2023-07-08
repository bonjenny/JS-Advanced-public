export class QueueObj {
  [key: string]: any;
}

export class Queue {
  storage: QueueObj;
  front: number;
  rear: number;
  constructor(items: QueueObj) {
    this.storage = { ...items };
    this.front = 0;
    this.rear = Object.keys(items).length;
  }

  size() {
    return this.storage[this.rear] === undefined
      ? 0
      : this.rear - this.front + 1;
  }

  add(value: any) {
    this.size() === 0
      ? (this.storage["0"] = value)
      : (this.storage[++this.rear] = value);
  }

  popleft() {
    let temp;
    temp = this.storage[this.front];
    delete this.storage[this.front];
    if (this.front !== this.rear) {
      this.front++;
      return temp;
    }
    this.front = 0;
    this.rear = 0;
    return temp;
  }

  getAll() {
    return Object.values(this.storage);
  }

  getNext(item: any) {
    let keys = Object.keys(this.storage);
    for (var i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (this.storage[key] === item) break;
    }
    const key = keys[++i % 3];
    return this.storage[key];
  }

  forEach(Callback: (value: any, index: number, array: any[]) => void) {
    return Object.values(this.storage).forEach(Callback);
  }
}
