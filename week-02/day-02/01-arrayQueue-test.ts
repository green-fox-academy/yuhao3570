import ArrayQueue from './01-arrayQueue';

let myQueue = new ArrayQueue<number>();
for(let i = 0; i < 10; i++){
    myQueue.add(i);
}

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.remove());
console.log(myQueue.peek());
console.log(myQueue.empty());