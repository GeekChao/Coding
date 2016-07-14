/*
* Question: partition a linked list around a value x
* Solution: iterate the linkedlist. if the value of the node is greater than x, delete and then insert the tail. 
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 13
*/

import java.io.*;
import java.lang.*;

class Partition{

    public void partition(LinkedList list, int x) throws Exception{
        Node temp = list.getHead().getNext();
        int len = list.length();
        int idx = 1;
        
        while(idx++ < len){
            Node node = temp;
            temp = temp.getNext(); // before the node delete, otherwise null pointer.
            
            if((int)node.getData() >= x){
                list.insertAfterTail(node.getData());
                list.deleteNode(node);
            }
        }
    }

    public static void main(String[] args){
        LinkedList list = new LinkedList();
		//insert 
		list.insertAfterTail(3);
		list.insertAfterTail(5);
		list.insertAfterTail(8);
		list.insertAfterTail(5);
		list.insertAfterTail(10);
		list.insertAfterTail(2);
		list.insertAfterTail(1);
		list.printList();

        Partition test = new Partition();
        try{
            test.partition(list, 5);
        }catch(Exception exp){
            System.out.println(exp);
        }
        list.printList();

    }
}