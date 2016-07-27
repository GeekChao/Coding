/*
* Question: check if a binary tree is a binary search tree.
* Solution: recurse through the entire tree as the same time as check the varivant of BST for each node.
* Time / Space Complexity: O(N) / O(LogN)
* Author: Mingchao Zou, Jul 26
*/

class ValidateBST{
    private boolean isBST;
//Buggy: this method only satisfy the condition left.data <= current.data < right.data for each node, but this is not sufficient.
    public BTreeNode checkBST(BTreeNode node){
        if(!isBST){ 
            return null;
        }

        if(node == null){
            return null;
        }

        BTreeNode leftChild = checkBST(node.getLeftChild());
        BTreeNode rightChild = checkBST(node.getRightChild());

        if(leftChild == null && rightChild == null){
            return node;
        }else if(leftChild != null && rightChild == null){
            if((int)leftChild.getData() <= (int)node.getData()){
                return node;
            }else{
                isBST = false;
            }
        }else if(leftChild == null && rightChild != null){
            if((int)rightChild.getData() > (int)node.getData()){
                return node;
            }else{
                isBST = false;
            }
        }else{
            if(((int)leftChild.getData() <= (int)node.getData()) && ((int)rightChild.getData() > (int)node.getData())){
                return node;
            }else{
                isBST = false;
            }
        }

        return null;
    }

    public boolean validateBST(BTreeNode root){
        isBST = true;
        checkBST(root);
        return isBST;
    }

    public static void main(String[] args){
        BTree<Integer> test = new BTree<Integer>();
        test.insert(1);
        test.insert(2);
        test.insert(3);
        test.insert(4);
        test.insert(5);
        test.insert(6);
        test.insert(7);
        test.inOrder(test.getRoot());

        ValidateBST bst = new ValidateBST();
        System.out.println("ValidateBST: " + bst.validateBST(test.getRoot()));

        BTree<Integer> test1 = new BTree<Integer>();
        test1.insert(10);
        test1.insert(7);
        test1.insert(13);
        test1.insert(5);
        test1.insert(9);
        test1.inOrder(test1.getRoot());
        
        System.out.println("ValidateBST: " + bst.validateBST(test1.getRoot()));
    }
}

/*
* Reuslt:
    6 
    4 
    7 
    2 
    5 
    1 
    3 
    ValidateBST: false

    5 
    7 
    9 
    10 
    13 
    ValidateBST: true
*/

/*
* Lesson:
    1. In-order traversal to binary serach tree, it will get a sorted ascending array.
    2. Binary search tree holds the conidtion that all left descendents is less than or equal to the current node, which is less than all its right descendants.
*/