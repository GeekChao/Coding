/*
* Question: two numbers represented by linked list, sum them up.
* Solution: iterate the linkedlist. 
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 14
*/

import java.io.*;
import java.lang.*;

class SumList{

    public int listToNum(LinkedList list, boolean reverse){
        Node node = list.getHead().getNext();
        int num = 0, digit = 1;
        while(node != list.getHead()){
            if(reverse){
                num += digit * (int)node.getData();
                digit *= 10;
            }else{
                num = num * 10 + (int)node.getData();
            }
            node = node.getNext();
        }
        return num;
    }   

    public int sumList(LinkedList list1, LinkedList list2, boolean reverse){
        return listToNum(list1, reverse) + listToNum(list2, reverse);
    }

    public static void main(String[] args){
        SumList test = new SumList();

        LinkedList list1 = new LinkedList();
        LinkedList list2 = new LinkedList();
		list1.insertAfterTail(7);
		list1.insertAfterTail(1);
		list1.insertAfterTail(6);
		list2.insertAfterTail(5);
		list2.insertAfterTail(9);
		list2.insertAfterTail(2);
        System.out.println("Reverse: " + test.sumList(list1, list2, true));

        LinkedList list3 = new LinkedList();
        LinkedList list4 = new LinkedList();
        list3.insertAfterTail(6);
		list3.insertAfterTail(1);
		list3.insertAfterTail(7);
		list4.insertAfterTail(2);
		list4.insertAfterTail(9);
		list4.insertAfterTail(5);
        System.out.println("Order: " + test.sumList(list3, list4, false));

    }
}

/*
* Recursive and runner technique are great approaches to slove a linked list problem
*/