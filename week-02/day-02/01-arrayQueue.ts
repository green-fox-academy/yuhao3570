import Queue from './ds interfaces/queue';

class ArrayQueue<T> implements Queue<T>{
    values: T[];
    constructor(){
        this.values = [];
    }

    empty(): boolean {
        return this.values.length === 0;
    }

    peek(): T {
        return this.values[0];
    }

    add(value: T): void {
        this.values.push(value);
    }

    remove(): T {
        return this.values.shift();
    }
}

export default ArrayQueue;