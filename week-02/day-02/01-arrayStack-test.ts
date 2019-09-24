import ArrayStack from './01-arrayStack';

let myStack = new ArrayStack<number>();
for(let i = 0; i < 10; i++){
    myStack.push(i);
}
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.empty());