/*
* Question: only access the given node, delete this node in a singly linkedlist.
* Solution: copy the data from the next node to the current node, and then delete next node.
* Time / Space Complexity: O(1) / O(1)
* Author: Mingchao Zou Jul 13
*/

import java.io.*;
import java.lang.*;

class DelNode{

    public boolean delNode(LinkedList list, Node node)throws Exception{
        if(node == list.getHead() || node == list.getTail())
            throw new Exception("Can not delete head or tail node");
        
        Node next = node.getNext();
        node.setData(next.getData());
        node.setNext(next.getNext());
        return true;
    }

    public static void main(String[] args){
        LinkedList list = new LinkedList();
		//insert 
		for(int i = 0; i < 9; i++)
			list.insertAfterTail(i);
		list.printList();

        DelNode test = new DelNode();
        try{
            test.delNode(list, list.findNode(3));
        }catch(Exception exp){
            System.out.println(exp);
        }
        list.printList();

    }
}