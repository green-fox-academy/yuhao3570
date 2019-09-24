import TreeNode from './05-treeNode';
import Tree from './ds interfaces/tree';

class BinarySearchTree<T> implements Tree<T>{
    
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
        if(this.empty()){
            this.root = new TreeNode(value);
        }else{
            this.insert(this.root, value);    
        }
    }

    insert(node: TreeNode<T>, value: T){
        if (node.value >= value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            }
            else {
                this.insert(node.left, value);
            }
        }
        else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            }
            else {
                this.insert(node.right, value)
            }
        }
    }

    remove(value: T): void {
        if(this.empty()){
            console.log("Empty Tree");
        }else if(!this.search(value)){
            console.log(`value: ${value} does not exist!`);
        }else{
            this.root = this.delete(this.root, value);
        }
    }

    delete(node: TreeNode<T>, value: T): TreeNode<T> {
    // Ref: https://www.tutorialspoint.com/Removing-a-node-in-a-Javascript-Tree
        if (node.value > value) {
            node.left = this.delete(node.left, value);
        }
        else if (node.value < value) {
            node.right = this.delete(node.right, value);
        }else{
            //found the value~~
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            
            if(node.left === null){
                node = node.right;
                return node;
            }

            if(node.right === null){
                node = node.left;
                return node;
            }

            let cur = node.right;
            console.log('got here');
            while(cur.left !== null){
                cur = cur.left;
            }
            node.value = cur.value;
            node.right = this.delete(node.right, cur.value);
            console.log('deleted');
            return node;
        }
    }

    search(value: T): boolean {
        if(this.root === null){
            return false;
        }else{
            return this.find(this.root, value) !== undefined;
        }
    }

    find(node: TreeNode<T>, value: T): TreeNode<T>{
        let found: TreeNode<T>;
        if (node.value === value){
            found = node;
        }
        if (node.value > value && node.left !== null) {
            found = this.find(node.left, value)
        }
        
        if (node.value < value && node.right !== null){
                found = this.find(node.right, value);
        } 
        
        return found;
    }

    print(node: TreeNode<T>){
        if(node === null){
            return
        }
        if(node.left !== null){
            this.print(node.left);
        }
        console.log(node.value);
        if(node.right !== null){
            this.print(node.right);
        }
    }
}

export default BinarySearchTree;