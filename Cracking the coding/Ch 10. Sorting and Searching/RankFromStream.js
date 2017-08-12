/*
* Question: Given a stream of integers, find the number of values less than or equal to x
* Solution: binary search tree
* Time / Space Complexity: O(logN) / O(n)
* Author: Mingchao Zou, August 10th
*/

function Tree(root){
    this.root = root;
}

Tree.prototype.track = function(val){
    if(this.root == null){
        this.root = new TreeNode(val);
    }else{
        this.root.insert(new TreeNode(val));
    }
};

Tree.prototype.getRankOfNum = function(val){
    return this.root.getRankOfNum(val, 0);
}

function TreeNode(data){
    this.left = null;
    this.right = null;
    this.data = data;
    this.count = 0; // the size of left substree
}

TreeNode.prototype.insert = function(node){
    
    if(this.data >= node.data){ //left
        this.count++;
        if(this.left == null){
            this.left = node;
        }else{
            this.left.insert(node);
        }
    }else{ //right
        if(this.right == null){
            this.right = node;
        }else{
            this.right.insert(node);
        }
    }
    
}

TreeNode.prototype.getRankOfNum = function(val, count){
    if(this.data > val){
        if(this.left != null){
            return this.left.getRankOfNum(val, count);
        }else{
            throw new Error('Not Found');
        }
    }else if(this.data < val){
        if(this.right != null){
            count += this.count + 1;
            return this.right.getRankOfNum(val, count);
        }else {
            throw new Error('Not Found');
        }
    }else {
        return count += this.count;
    }
}

module.exports = {
    Tree: Tree
};

//unit test
var tree = new Tree();

tree.track(5);
tree.track(1);
tree.track(4);
tree.track(4);
tree.track(5);
tree.track(9);
tree.track(7);
tree.track(13);
tree.track(3);

console.log(tree.getRankOfNum(1));
console.log(tree.getRankOfNum(3));
console.log(tree.getRankOfNum(4));
console.log(tree.getRankOfNum(5));
console.log(tree.getRankOfNum(13));
console.log(tree.getRankOfNum(7));