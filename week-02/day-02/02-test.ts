import LinkedNodal from './02-linkedNodal';

let myLinkedList = new LinkedNodal();
console.log("ONE:", myLinkedList);

console.log('-----Test add-----')
myLinkedList.add('a');
myLinkedList.add('b', 1);
myLinkedList.add('c', 2);
myLinkedList.add('d', 3);
myLinkedList.add('e', 4);
myLinkedList.add('f', 5);


console.log("After add", myLinkedList);
myLinkedList.printAll();

console.log('-----Test get()-----')
console.log(myLinkedList.get(3));

console.log('-----Test removeItem()-----')
myLinkedList.removeItem('d');
myLinkedList.printAll();

console.log('-----Test add to middle-----')
myLinkedList.add('new', 2);
myLinkedList.printAll();

console.log('-----Test remove() by index----')
myLinkedList.remove(2);
myLinkedList.printAll();