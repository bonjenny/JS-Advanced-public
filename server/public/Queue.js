export class Queue {
    constructor(items) {
        this.storage = { ...items };
        this.front = 0;
        this.rear = Object.keys(items).length;
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
        let keys = Object.keys(this.storage);
        for (var i=0; i < keys.length; i++) {
            const key = keys[i]
            if (this.storage[key] === item) break;
        }
        const key = keys[++i % 3];
        return this.storage[key];
    }
}





