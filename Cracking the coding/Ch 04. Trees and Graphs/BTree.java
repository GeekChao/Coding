/*
* implement a binary tree.
* Author: Mingchao Zou, Jul 21
*/
import java.io.*;

class BTreeNode<T>{
    T data;
    BTreeNode<T> left;
    BTreeNode<T> right;

    public BTreeNode(T data){
        this.data = data;
    }

    public void setLeftChild(BTreeNode<T> node){
        this.left = node;
    }

    public void setRightChild(BTreeNode<T> node){
        this.right = node;
    }

    public BTreeNode<T> getLeftChild(){
        return this.left;
    }

    public BTreeNode<T> getRightChild(){
        return this.right;
    }

    public T getData(){
        return this.data;
    }
    
    public void setData(T data){
        this.data = data;
    }
}

class BTree<T>{    
    private BTreeNode<T> root;
    private static boolean isExist = false;

    public void insert(T data){
        insert(root, data);
    }

    public void insert(BTreeNode<T> node, T data){
        if(node == root && node == null){
            root = new BTreeNode<T>(data);
            return;
        }   
        
        if(node.getLeftChild() == null){
            node.setLeftChild(new BTreeNode<T>(data));
        }else if(node.getRightChild() == null){
            node.setRightChild(new BTreeNode<T>(data));
        }else{
            insert(node.getLeftChild(), data);
        }      
    }

    public boolean find(T data){
        isExist = false;
        find(root, data);
        return isExist;
    }

    public boolean find(BTreeNode<T> node, T data){
        if(isExist) //if found, no need to dive deep.
            return true;

        if(node != null){
            find(node.getLeftChild(), data);
            if(node.getData().equals(data)){
                isExist = true;
             }  
            find(node.getRightChild(), data); 
        }

        return false;
    }  

    public boolean find1(BTreeNode<T> node, T data){
        boolean isExist = false;

        if(node == root && node.getData().equals(data)){ //root node
            return true;
        } 

        if(node != null){
            if(node.getLeftChild() != null && node.getLeftChild().getData().equals(data)){
                return true;
            }else if(node.getRightChild() != null && node.getRightChild().getData().equals(data)){
                return true;
            }else{
                isExist = find1(node.getLeftChild(), data);
            }
        }

        return isExist;
    } 

    public void inOrder(BTreeNode<T> node){
        if(node != null){
            inOrder(node.getLeftChild());
            System.out.println(node.getData() + " ");
            inOrder(node.getRightChild());
        }
    }

    public boolean isEmpty(){
        return root == null;
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
        test.inOrder(test.root);
        System.out.println(test.find(4));
        System.out.println(test.find(14));
        System.out.println(test.find1(test.root ,4));
        System.out.println(test.find1(test.root, 14));
    }
}

/*
* Lesson1: this following snippet is buggy. 
* If I pass a null reference to a parameter in a function, then have this parameter point to
* a new object. The fact is that this passed null reference will not point to the new object.
*/

/*
public void insert(BTreeNode<T> node, T data){
        
    if(node == null){
        node = new BTreeNode<T>(data);
        return;
    }
    
    if(node.getLeftChild() == null)
        insert(node.getLeftChild(), data);
    else    
        insert(node.getRightChild(), data);
}
*/

/*
* Lesson2: The following sinppet has two isExist assignment. So the deeper branch will overwrite the result.
*/

/*
public boolean find(BTreeNode<T> node, T data){
    boolean isExist = false;
    if(node != null){
        isExist = find(node.getLeftChild(), data); //one isExist assignment
        if(node.getData().equals(data)){
            return true;
        }  
        isExist = find(node.getRightChild(), data); //one isExist assignment
    }

    return isExist;
}  
*/