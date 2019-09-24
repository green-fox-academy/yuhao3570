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

// test
let myQueue = new ArrayQueue<number>();
for(let i = 0; i < 10; i++){
    myQueue.add(i);
}

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.remove());
console.log(myQueue.peek());
console.log(myQueue.empty());