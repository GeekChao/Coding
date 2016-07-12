/*
* A Doubly Circular linkedlist
* Author: Mingchao Zou Jul 11
*/

import java.io.*;
import java.lang.*;

class Node{
    private Object data;
    private Node next;
    private Node prev;
    
    public Node(Object data){
    	this.data = data;
    }
    
	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public Node getNext() {
		return next;
	}

	public void setNext(Node next) {
		this.next = next;
	}

	public Node getPrev() {
		return prev;
	}

	public void setPrev(Node prev) {
		this.prev = prev;
	}
    
}

public class LinkedList{
    private Node head;
    private Node tail;
    private int length;

    public LinkedList(){
		head = new Node(null);
		head.setNext(head);
		head.setPrev(head);
		tail = head;
		length = 0;
    }

	public Node getHead(){
		return head;
	}

    public boolean isEmpty(){
        return length == 0;
    }

	public int length(){
		return length;
	}
    
    public Node findNode(Object data) throws Exception {
		if(isEmpty())
			throw new Exception("Empty List!!!");
		
		Node temp = head.getNext();
		while(temp != head){
			if(temp.getData().equals(data))
				return temp;
			else
				temp = temp.getNext();
		}
		
		if(temp == head)
			throw new Exception("Not Found!!!");
		
		return null;
    }

	public void insertAfterTail(Object data){
		insertAfter(tail, data);
	}

	public void insertAfterHead(Object data){
		insertAfter(head, data);
	}

    public void insertAfter(Node node, Object data){
		Node newNode = new Node(data);
		newNode.setNext(node.getNext());
		newNode.setPrev(node);
		node.getNext().setPrev(newNode);
		node.setNext(newNode);
		
		if(node == tail){
			tail = newNode;
		}
		
		length++;
    }
    
    public void deleteNode(Object data) throws Exception{
		if(isEmpty())
			throw new Exception("Empty List");

		Node node = findNode(data);
		if(node == null)
			throw new Exception("That node doesn't exist!'");

		node.getPrev().setNext(node.getNext());
		node.getNext().setPrev(node.getPrev());
		node.setNext(null);
		node.setPrev(null);
		
		length--;
    }

	public void printList(){
		Node temp = head.getNext();
		while(temp != head){
			System.out.print(temp.getData());
			temp = temp.getNext();
		}
		System.out.println();
	}

/*
	public static void main(String[] args){
		LinkedList list = new LinkedList();
		//insert 
		for(int i = 0; i < 9; i++)
			list.insertAfterTail(i);
		list.printList();
		//delete
		try{
			System.out.println("Length: " + list.length());
			list.deleteNode(5);
			list.deleteNode(85);
		}catch(Exception exp){
			System.out.println(exp);
		}finally{
			System.out.println("Length: " + list.length());
		}
		list.printList();		
	}
	*/
    
}
