import BinarySearchTree from './06-binarySearchTree';

let myBST = new BinarySearchTree<string>('hello');
myBST.add('a');
myBST.add('b');
myBST.add('c');
myBST.add('d');
myBST.add('e');
myBST.add('f');
myBST.add('g');
myBST.print(myBST.root);

console.log(myBST.search('a'));
console.log(myBST.search('t'));

// myBST.remove('hello');

console.log('--------After remove');
// myBST.print(myBST.root);



