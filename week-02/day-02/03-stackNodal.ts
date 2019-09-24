import Nodal from './02-nodal';
import Stack from './ds interfaces/stack';

class StackNodal implements Stack<string>{
    top: Nodal;
    count: number;

    constructor(){
        this.top = new Nodal();
        this.count = 0;
    }
    
    empty(): boolean {
        return this.count === 0;
    }    
    
    peek(): string {
        return this.top.value;
    }

    push(value: string): void {
        if(this.count > 0){
            let temp = new Nodal(value);
            temp.next = this.top;
            this.top = temp;
        } else {
            this.top = new Nodal(value);
        }
        this.count++;
    }
    pop(): string {
        let temp = this.top.value;
        this.top = this.top.next;
        this.count--;
        return temp;
    }

    printAll(){
        let current = this.top;
        for(let i = 0; i < this.count; i++){
            console.log(`${current.value}`);
            current = current.next;
        }
    }
}

let myStack = new StackNodal();
console.log(myStack);

console.log('----Test push----');
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
myStack.push('e');
myStack.push('f');
myStack.printAll();

console.log('----Test pop----');
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log('----after pop----');
myStack.printAll();

