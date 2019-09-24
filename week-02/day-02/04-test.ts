import QueueOfStacks from './04-queueOfStacks';

let myQueue = new QueueOfStacks();
myQueue.add('a');
myQueue.add('b');
myQueue.add('c');
myQueue.add('d');
myQueue.add('e');
myQueue.add('f');
console.log('after add', myQueue.org_stack)
console.log(myQueue);
console.log(myQueue.peek());
myQueue.remove();
myQueue.remove();
myQueue.remove();
console.log('after remove', myQueue.org_stack)