/*
* Question: returns the minimum element in O(1) time
* Solution: Keep track of the state of minimum values using another stack
* Author: Mingchao Zou, Jul 19
*/

import java.io.*;

public class StackMin extends Stack<Integer>{

    private Stack<Integer> minStack;

    public StackMin(){
        minStack = new Stack<Integer>();
    }

    public void push(int data) throws Exception{
        super.push(data);
        if(minStack.isEmpty()){
            minStack.push(data);
        }else{
            if(data <= minStack.peek()){
                minStack.push(data);
            }
        }
    }

    public Integer pop() throws Exception{
        int data = super.pop();
        if(minStack.peek() == data)
            minStack.pop();
        
        return data;
    }

    public Integer min() throws Exception{
        return minStack.peek();
    }

    public static void main(String[] args){
        StackMin stack = new StackMin();
        try{
            stack.push(5);
            System.out.println("min is: " + stack.min());
            stack.push(6);
            System.out.println("min is: " + stack.min());
            stack.push(3);
            System.out.println("min is: " + stack.min());
            stack.push(7);
            System.out.println("min is: " + stack.min());
            stack.pop();
            System.out.println("min is: " + stack.min());
            stack.pop();
            System.out.println("min is: " + stack.min());
        }catch(Exception exp){

        }
    }
}