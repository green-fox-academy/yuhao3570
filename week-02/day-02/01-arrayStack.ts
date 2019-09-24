import Stack from './ds interfaces/stack';

class ArrayStack<T> implements Stack<T>{
    values: T[];

    constructor(){
        this.values = [];
    }

    empty(): boolean {
        return this.values.length === 0;
    }    
    
    peek(): T {
        return this.values[this.values.length - 1];
    }
    
    push(value: T): void {
        this.values.push(value);
    }
    
    pop(): T {
        return this.values.pop();
    }
}

//test

let myStack = new ArrayStack<number>();
for(let i = 0; i < 10; i++){
    myStack.push(i);
}
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.empty());