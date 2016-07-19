/*
* Question: use a single array to implement three stacks
* Solution: divide an array into three equal parts.
* Author: Mingchao Zou, Jul 19
*/

import java.io.*;

public class ThreeInOne{
    private static class Stack{
        private int top;
        private int length;
        private int max_len;

        public Stack(int top, int max_len){
            this.top = top;
            this.max_len = max_len;
            this.length = 0;
        }

        public boolean isEmpty(){
            return length == 0;
        }

        public int peek(){
            return array[top - 1];
        }

        public void push(int data) throws Exception{
            if(length >= max_len)
                throw new Exception("Full Stack");
            
            array[top++] = data;
            length++;
        }

        public int pop() throws Exception{
            if(length == 0)
                throw new Exception("Empty Stack");

            int temp = array[--top];
            length--;
            return temp;
        }
    }

    private static int[] array;
    private int stretch;
    private static int length;

    public ThreeInOne(int len){
        this.length = len;
        array = new int[length];
        stretch = length / 3;
    }

    public Stack[] initStack(){
        Stack[] stack = new Stack[3];
        //stack0
        stack[0] = new Stack(0, stretch);
        //stack1
        stack[1] = new Stack(stretch, stretch);
        //stack2
        stack[2] = new Stack(stretch * 2, length - stretch * 2);

        return stack;
    }

    public static void main(String[] args){
        ThreeInOne test = new ThreeInOne(10);
        Stack[] stack = test.initStack();
        //stack0
        for(int i = 0; i < stack[0].max_len; i++){
            try{
                stack[0].push(i);
            }catch(Exception exp){
                System.out.println(exp);
            }   
        }

        //stack1
        for(int i = 0; i < stack[1].max_len; i++){
            try{
                stack[1].push(i);
            }catch(Exception exp){
                System.out.println(exp);
            }          
        }

        //stack0
        for(int i = 0; i < stack[2].max_len; i++){
            try{
                stack[2].push(i);
            }catch(Exception exp){
                System.out.println(exp);
            }  
        }

        try{
            stack[2].push(111); // error
        }catch(Exception exp){
            System.out.println(exp);
        }  

        try{
            System.out.println(stack[2].pop()); // 3
        }catch(Exception exp){
            System.out.println(exp);
        }  

        for(int i = 0; i < length; i++){
            System.out.print(array[i] + "-> ");
        }
    }
}