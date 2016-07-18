/*
* Stack implemented by a signly linked list
* Author: Mingchao Zou, Jul 18
*/
public class Stack<T>{
    private static class StackNode<T>{
        private T data;
        private StackNode<T> next;

        public StackNode(T data){
            this.data = data;
        }
    }

    private StackNode<T> top;

    public T peek() throws Exception{
        if(isEmpty())
            throw new Exception("Empty Stack");
        else
            return top.data;
    }

    public T pop() throws Exception{
        if(isEmpty())
            throw new Exception("Empty Stack");
        StackNode<T> temp = top;
        top = top.next;
        temp.next = null;
        return temp.data;
    }

    public void push(T data){
        StackNode<T> node = new StackNode<T>(data);
        node.next = top;
        top = node;
    }

    public boolean isEmpty(){
        return top == null;
    }
}