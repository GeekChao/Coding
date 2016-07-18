/*
* Question: determine if the two lists instersect.
* Solution: Keep track of each node reference using HashSet.
* Time / Space Complexity: O(n + m) / O(n)
* Author: Mingchao Zou Jul 15
*/

import java.io.*;
import java.lang.*;
import java.util.*;

class Intersection{

    public Node isInterSect(LinkedList list1, LinkedList list2){
        Set set = new HashSet<Integer>();
        list1.printList();
        Node temp = list1.getHead().getNext();

        while(temp != list1.getHead()){
            set.add(temp.hashCode());
            temp = temp.getNext();
        }

        temp = list2.getHead().getNext();
        while(temp != list2.getHead()){
            if(set.contains(temp.hashCode()))
                return temp;
            else
                temp = temp.getNext();
        }

        return null;
    }

    public static void main(String[] args){
        Intersection test = new Intersection();
        Node node = new Node(111);
        LinkedList list1 = new LinkedList();
        LinkedList list2 = new LinkedList();

		list1.insertAfterTail(7);
		list1.insertAfterTail(node);
		list1.insertAfterTail(6);
		list1.insertAfterTail(5);
        list1.printList();

        list2.insertAfterTail(2);
		list2.insertAfterTail(1);
        list2.insertAfterTail(9);
        list2.insertAfterTail(node);
        list2.printList();
        
        System.out.println("Intersect Node: " + test.isInterSect(list1, list2));

    }
}

/*
* Lesson: Draw a example, then observe it to find the speciality.
*/