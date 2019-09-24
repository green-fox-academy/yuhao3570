class TreeNode<T>{
    left: TreeNode<T>;
    right: TreeNode<T>;
    value: T;

    constructor(value?: T){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

export default TreeNode;