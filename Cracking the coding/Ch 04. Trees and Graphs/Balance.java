/*
* Question: check if a binary tree is balanced.
* Solution: a little modification of in order traversal with two variables left_height and right_height
* Time / Space Complexity: O(N) / O(logN)
* Author: Mingchao Zou, Jul 25
*/

import java.lang.*;
import java.io.*;

class Balance extends BTree<Integer>{

    private boolean isBalanced = true;

    public int maxHeight(BTreeNode node){
        int left = node.getLeftHeight();
        int right = node.getRightHeight(); 
        return left > right ? left : right;
    }

    public boolean balance(BTreeNode node){
        if(!isBalanced){
            return false;
        }

        if(node == null){
            return true;
        }

        balance(node.getLeftChild());
        if(node.getLeftChild() == null && node != null){
            node.setLeftHeight(0);
        }else if(node.getLeftChild() != null){
            node.setLeftHeight(maxHeight(node.getLeftChild()) + 1);
        }

        balance(node.getRightChild());
        if(node.getRightChild() == null && node != null){
            node.setRightHeight(0);
        }else if(node.getRightChild() != null){
            node.setRightHeight(maxHeight(node.getRightChild()) + 1);
        }

        if(Math.abs(node.getRightHeight() - node.getLeftHeight()) > 1){
            isBalanced = false;
        }

        return isBalanced;

    }

    public static void main(String[] args){
        Balance test = new Balance();
        test.insert(1);
        test.insert(2);
        test.insert(3);
        test.insert(4);
        test.insert(5);
        test.insert(6);
        test.insert(7);
        test.inOrder(test.getRoot());
        System.out.println("Balance Binary Tree: " + test.balance(test.getRoot()));

/*        test.insert(1);
        test.insert(2);
        test.insert(3);
        test.insert(4);
        test.insert(5);
        test.inOrder(test.getRoot());
        System.out.println("Balance Binary Tree: " + test.balance(test.getRoot()));*/
    }
}

/*Result:
    4 
    2 
    5 
    1 
    3 
    Balance Binary Tree: true
    
    6 
    4 
    7 
    2 
    5 
    1 
    3 
    Balance Binary Tree: false    
*/

/*
* Lesson: Separate the calculating heights part from the one checking balance.
*/