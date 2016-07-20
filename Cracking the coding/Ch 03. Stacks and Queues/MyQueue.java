/*
* Question: implement a queue using two stacks.
* Time / Space Complexity: O(1) / O(n)
* Author: Mingchao Zou, Jul 20
*/

import java.io.*;

public class MyQueue{
    private Stack s1;
    private Stack s2;

    public MyQueue(){
        s1 = new Stack<Integer>();
        s2 = new Stack<Integer>();
    }

    public void enQueue(int data){
        s2.push(data);
    }

    public int deQueue() throws Exception{
        if(isEmpty())
            throw new Exception("Empty Queue");
        shiftStack();
        return (int)s1.pop();
    }

    public void shiftStack() throws Exception{
        if(s1.isEmpty()){
            while(!s2.isEmpty())
                s1.push(s2.pop());
        }
    }

    public int peek() throws Exception{
        if(isEmpty())
            throw new Exception("Empty Queue");
        shiftStack();
        return (int)s1.peek();
    }

    public boolean isEmpty(){
        return s1.isEmpty() && s2.isEmpty();
    }

    public static void main(String[] args){
        MyQueue test = new MyQueue();
        test.enQueue(2);
        test.enQueue(4);
        test.enQueue(9);
        try{
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            test.enQueue(12);
            test.enQueue(14);
            test.enQueue(11);
            System.out.println(test.deQueue());
            System.out.println(test.peek());
            test.enQueue(19);
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            System.out.println(test.deQueue());
            
        }catch(Exception exp){
            System.out.println(exp);
        }
    }

}