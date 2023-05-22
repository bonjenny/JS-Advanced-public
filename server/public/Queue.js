export class Queue {
    constructor(items) {
        this.storage = { ...items };
        this.front = 0;
        this.rear = items.length;
    }
    
    size() {
        return (this.storage[rear] === undefined) ? 0 : (this.rear - this.front + 1);
    }

    add(value) {
        this.size() === 0 ? this.storage['0'] = value : this.storage[++this.rear] = value;
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

    getNext(item) {
        let key = Object.keys(this.storage).find(key => this.storage[key] === item);
        return this.storage[++key % 3];
    }
}





