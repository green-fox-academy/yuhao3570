import Tree from './ds interfaces/tree';
import TreeNode from './05-treeNode';
import ArrayQueue from './01-arrayQueue';

class BinaryTree<T> implements Tree<T> {
    
    root: TreeNode<T>;
    constructor(value?: T){
        if(value === undefined){
            this.root = null;
        }else{
            this.root = new TreeNode(value);
        }
    }
  
    empty(): boolean {
        return this.root === null;
    }    
    
    add(value: T): void {
        let newNode = new TreeNode(value);
        let treeQueue = new ArrayQueue<TreeNode<T>>();

        if(this.root === null){
            this.root = newNode;
        }else{
            treeQueue.add(this.root);
            this.insert(this.root, newNode, treeQueue);
        }
    }

    insert(node: TreeNode<T>, newNode: TreeNode<T>, treeQueue: ArrayQueue<TreeNode<T>>): void{
        if(node.left === null){
            node.left = newNode;
            return;
        }else if(node.right === null){
            node.right = newNode;
            return;
        }else{
            treeQueue.add(node.left);
            treeQueue.add(node.right);
            treeQueue.remove();
        }
        this.insert(treeQueue.peek(), newNode, treeQueue);
    }

    print(node: TreeNode<T>): void{
        if(node.left !== null){
            this.print(node.left);
        }
        console.log(node.value);
        if(node.right !== null){
            this.print(node.right);
        }
    }
    
    remove(value: T): void {
        let target = this.find(value, this.root);
        if(target !== undefined){
            //replace the value of the target node with a rightmost leaf value
            target.value = this.findRightMost(this.root);
        }else{
            console.log("no such value exists;")
        }
    }

    findRightMost(node: TreeNode<T>): T{
        while(node.right !== null){
            node = node.right;
        }
        let temp = node.value;
        node = null;
        return temp;
    }

    search(value: T): boolean {
        return this.find(value, this.root) !== undefined;
    }

    find(value: T, node: TreeNode<T>): TreeNode<T>{
        let target: TreeNode<T>;
        if(node.value === value){
            return node;
        }
        if(node.left !== null){
            target = this.find(value, node.left);
        }else if(node.right != null){
            target = this.find(value, node.right);
        }
        return target;
    };
}

export default BinaryTree;