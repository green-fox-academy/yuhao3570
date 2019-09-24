import BinaryTree from './05-binaryTree';

let myBT = new BinaryTree<string>('hello');
myBT.add('a');
myBT.add('b');
myBT.add('c');
myBT.add('d');
myBT.add('e');
myBT.add('f');
myBT.add('g');
myBT.add('h');

console.log(myBT);
myBT.print(myBT.root);

console.log(myBT.search('a'));
console.log(myBT.search('abc'));
myBT.remove('hlo');
myBT.print(myBT.root);
