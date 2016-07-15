/*
* Question: Check if a linked list is a palindrome
* Solution: iterate the linkedlist. 
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou Jul 14
*/

import java.io.*;
import java.lang.*;

class Front{
        public Node node;
        public Node head;
        public boolean isDone;
        public boolean isPalind;

        public Front(LinkedList list){
            node = list.getHead();
            head = list.getHead();
            isDone = false; 
            isPalind = true;
        }
    }

class Palindrome{

    public boolean palindrome(Node node, Front front){
        if(node == front.head)
            return false;

        palindrome(node.getNext(), front);

        if(!front.isDone){
            front.node = front.node.getNext();
            if(node == front.node){ //odd length
                front.isDone = true;
                return front.isPalind;
            }else if(node == front.node.getNext()){ // even length
                front.isDone = true;
            }

            if(!node.getData().equals(front.node.getData()))
                front.isPalind = false;
        }

        return front.isPalind;
    }

    public static void main(String[] args){
        Palindrome test = new Palindrome();

        LinkedList list1 = new LinkedList();
        Front front1 = new Front(list1);
		list1.insertAfterTail(7);
		list1.insertAfterTail(1);
		list1.insertAfterTail(6);
		list1.insertAfterTail(1);
		list1.insertAfterTail(7);
        list1.printList();
        System.out.println("Palindrome: " + test.palindrome(front1.head.getNext(), front1));

        LinkedList list2 = new LinkedList();
        Front front2 = new Front(list2);
        list2.insertAfterTail(6);
		list2.insertAfterTail(1);
		list2.insertAfterTail(7);
		list2.insertAfterTail(7);
		list2.insertAfterTail(1);
		list2.insertAfterTail(6);
        list2.printList();
        System.out.println("Palindrome: " + test.palindrome(front2.head.getNext(), front2));

        LinkedList list3 = new LinkedList();
        Front front3 = new Front(list3);
        list3.insertAfterTail(6);
		list3.insertAfterTail(1);
		list3.insertAfterTail(7);
		list3.insertAfterTail(5);
		list3.insertAfterTail(1);
		list3.insertAfterTail(6);
        list3.printList();
        System.out.println("Palindrome: " + test.palindrome(front3.head.getNext(), front3));

        LinkedList list4 = new LinkedList();
        Front front4 = new Front(list4);
        list4.insertAfterTail(6);
		list4.insertAfterTail(1);
		list4.insertAfterTail(7);
		list4.insertAfterTail(5);
		list4.insertAfterTail(1);
        list4.printList();
        System.out.println("Palindrome: " + test.palindrome(front4.head.getNext(), front4));
    }
}

/*
* Conclusion: even though a recursive function can only return one type of value, you 
* can wrap that function to return any other type of value.
* Lesson: an alternative iterate approach is to use stack to simulate the recursive calls.
*/