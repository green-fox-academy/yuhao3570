import StackNodal from './03-stackNodal';

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