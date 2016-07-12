/*
* Question: remove duplicates from an unsorted linked list.
* Solution: Iterate the list and put the node in the hashmap at the same time
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou Jul 11
*/

import java.io.*;
import java.lang.*;
import java.util.*;

class RemoveDups{

    public void removeDups(LinkedList list) throws Exception{
        Map map = new HashMap<Object, Node>();
        Node head = list.getHead();
        Node temp = head.getNext();
        while(temp != head){
            if(map.containsKey(temp.getData()))
                list.deleteNode(temp.getData());
            else
                map.put(temp.getData(), temp);

            temp = temp.getNext();
        }
    }

    public static void main(String[] args){
		LinkedList list = new LinkedList();
		//Make a list with duplicates 
		for(int i = 0; i < 9; i++)
			list.insertAfterTail(i);
        for(int i = 0; i < 3; i++)
			list.insertAfterTail(i);
		list.printList();		
        //Remove duplicates
        RemoveDups test = new RemoveDups();
        try{
            test.removeDups(list);
        }catch(Exception exp){
            System.out.println(exp);
        }
        list.printList();
	}
}

/*
* Conclusion: Use HashSet instead: http://stackoverflow.com/questions/2773824/difference-between-hashset-and-hashmap
*/