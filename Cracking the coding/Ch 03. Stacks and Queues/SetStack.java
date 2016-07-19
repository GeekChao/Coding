/*
* Question: A set of stacks work like a single stack
* Solution: use a array
* Time / Space Complexity: O(1) / O(n)
* Author: Mingchao Zou, Jul 19
*/

import java.io.*;

public class SetStack{

    private static class StackWithSize extends Stack<Integer>{
        private int length;
        
        public Integer pop() throws Exception{
            length--;
            return super.pop();
        }

        public void push(int data) throws Exception{
            length++;
            super.push(data);
         }

         public int length(){
             return length;
         }
    }

    private int threshold;
    private int cur_stack;
    private StackWithSize[] stackSet;
    private int size;

    public SetStack(int threshold, int size){
        this.threshold = threshold;
        this.cur_stack = 0;
        this.size = size;
        stackSet = new StackWithSize[size];
        stackSet[cur_stack] = new StackWithSize();
    }

    public int pop() throws Exception{
        if(stackSet[cur_stack].length() == 0){
            if(cur_stack == 0)
                throw new Exception("Empty Set");
            else    
                cur_stack--;
        }

        return stackSet[cur_stack].pop();
    }

    public void push(int data) throws Exception{

        if(stackSet[cur_stack].length >= threshold){
            if(cur_stack == size - 1)
                throw new Exception("Full Set");
            else
                cur_stack++;

            if(stackSet[cur_stack] == null)
                stackSet[cur_stack] = new StackWithSize();
        }

        stackSet[cur_stack].push(data);
    } 

    public Integer popAt(int index) throws Exception{
        return stackSet[index].pop();
    }  

    public static void main(String[] args){
        SetStack test = new SetStack(2, 3);
        try{
            test.push(1);
            test.push(2);
            test.push(3);
            test.push(4);
            test.push(5);
            test.push(6);
            test.push(7);
            test.push(8);
        }catch(Exception exp){
            System.out.println(exp);            
        }
        
        try{
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
            System.out.println(test.pop());
        }catch(Exception exp){
            System.out.println(exp);            
        }

        try{
            test.push(1);
            test.push(2);
            test.push(3);
            test.push(4);
            System.out.println(test.pop());
            test.push(6);
            test.push(7);
            System.out.println(test.pop());
            System.out.println(test.popAt(0));
        }catch(Exception exp){
            System.out.println(exp);            
        }
    }
}

/*
* Lesson: a "rollover" system if it requries each stack being at full capacity.
*/