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

export default ArrayStack;