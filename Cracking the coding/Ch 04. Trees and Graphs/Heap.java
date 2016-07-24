/*
* Implement a heap using a queue.
* Author: Mingchao Zou, Jul 23
*/

import java.io.*;
import java.util.*;

class HeapNode extends BTreeNode<Integer>{
    private HeapNode parent;

    public HeapNode getParent(){
        return this.parent;
    }

    public void setParent(HeapNode parent){
        this.parent = parent;
    }

    public HeapNode(int data){
        super(data);
    } 

    public HeapNode(int data, HeapNode parent){
        super(data);
        this.parent = parent;
    }
}

class Heap extends BTree<Integer>{  
    private HeapNode root;
    private int size;

    public Heap(){
        root = null;
        size = 0;
    }

    public int min() throws Exception{
        if(size == 0)
            throw new Exception("Empty Heap");

        return root.getData();
    }

    public void insert(int data){
        if(root == null){
            root = new HeapNode(data, null);
            return;
        }

        Queue<HeapNode> queue = new LinkedList<HeapNode>();
        queue.add(root);
        HeapNode newNode = null, node = null;
        // find the leftmost empty place to insert a new node.
        while((node = queue.poll()) != null) {
            if(node.getLeftChild() != null){
                queue.add((HeapNode)node.getLeftChild());
            }else{
                newNode = new HeapNode(data, node);
                node.setLeftChild(newNode);
                break;
            }

            if(node.getRightChild() != null){
                queue.add((HeapNode)node.getRightChild());
            }else{
                newNode = new HeapNode(data, node);
                node.setRightChild(newNode);
                break;
            }
        }
        // Bubble the new node up to maintain the variant of heap
        while(newNode.getParent() != null){
            if((int)newNode.getData() < (int)newNode.getParent().getData()){
                swap(newNode, newNode.getParent());
                newNode = newNode.getParent();
            }else{
                break;
            }
        }
        
        size++;
    }

    private void swap(HeapNode source, HeapNode target){
        int temp;
        temp = (int)source.getData();
        source.setData(target.getData());
        target.setData(temp);
    }

    public int length(){
        return size;
    }

    public int extractMin() throws Exception{
        if(size == 0)
            throw new Exception("Empty Heap");

        int minNum = min();
        Queue<HeapNode> queue = new LinkedList<HeapNode>();
        queue.add(root);
        HeapNode node = null;
        // find the rightmost child node in the bottom of the tree
        while(queue.peek() != null){
            node = queue.remove();

            if(node.getLeftChild() != null){
                queue.add((HeapNode)node.getLeftChild());
            }

            if(node.getRightChild() != null){
                queue.add((HeapNode)node.getRightChild());
            }
        }
        // swap that node with root, then delete it
        swap(root, node);
        if(node == node.getParent().getLeftChild()){
            node.getParent().setLeftChild(null);
        }else{
            node.getParent().setRightChild(null);
        }       
        node.setParent(null);
        // Bubble down the root
        node = root;
        while(node != null){
            if(node.getLeftChild() != null && node.getRightChild() != null){
                if((int)node.getLeftChild().getData() < (int)node.getRightChild().getData()){
                    if((int)node.getLeftChild().getData() < (int)node.getData()){
                        swap(node, (HeapNode)node.getLeftChild());
                        node = (HeapNode)node.getLeftChild();
                    }
                }else{
                    if((int)node.getRightChild().getData() < (int)node.getData()){                 
                        swap(node, (HeapNode)node.getRightChild());
                        node = (HeapNode)node.getRightChild();
                    }
                }
            }

            if(node.getLeftChild() != null && node.getRightChild() == null){
                if((int)node.getLeftChild().getData() < (int)node.getData()){
                    swap(node, (HeapNode)node.getLeftChild());
                    break;
                }
            }

            if(node.getLeftChild() == null)
                break;
            
        }

        size--;
        return minNum;
    }

    public static void main(String[] args){
        Heap test = new Heap();

        test.insert(8);
        test.insert(2);
        test.insert(1);
        test.insert(4);
        test.insert(9);
        test.insert(0);
        System.out.println("Inorder tree traversal:");
        test.inOrder(test.root);
        System.out.println();

        try{
            System.out.println("The minimum element in the heap is: " + test.min());
            
            System.out.println("Extract min fromt the heap: " + test.extractMin());
            System.out.println("Extract min fromt the heap: " + test.extractMin());
            System.out.println("Extract min fromt the heap: " + test.extractMin());
            System.out.println("Extract min fromt the heap: " + test.extractMin());

            System.out.println();
            System.out.println("Inorder tree traversal:");        
            test.inOrder(test.root); 

        }catch(Exception exp){
            System.out.println(exp);
        }
    }
}

/*
* Conclusion: heap is a complete binary tree.
*/

/*
* Result:
    Inorder tree traversal:
    8 
    4 
    9 
    0 
    2 
    1 

    The minimum element in the heap is: 0
    Extract min fromt the heap: 0
    Extract min fromt the heap: 1
    Extract min fromt the heap: 2
    Extract min fromt the heap: 4

    Inorder tree traversal:
    9 
    8
*/