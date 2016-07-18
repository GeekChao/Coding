/*
* Queue implemented by a signly linked list.
* Author: Mingchao Zou, Jul 18
*/
public class Queue<T>{
    private static class QueueNode<T>{
        private T data;
        private QueueNode<T> next;

        public QueueNode(T data){
            this.data = data;
        }
    }

    private QueueNode<T> first;
    private QueueNode<T> last;
 
    public boolean isEmpty(){
        return first == null;
    }

    public void enQueue(T data){
        QueueNode<T> node = new QueueNode<T>(data);
        if(isEmpty()){
            first = node;
            last = node;
        }else{ 
            last.next = node;
            last = node;
        }
            
    }

    public T deQueue() throws Exception{
        if(isEmpty())
            throw new Exception("Empty Queue");
               
        QueueNode<T> temp = first;
        if(first == last){ // only one item exists in the queue.
            first = null;
            last = null;
        }else{
            first = first.next;
        }
        
        temp.next = null;
        return temp.data;
    }
}

/*
* Lesson: Since it is a signly linked list, the first pointer should be at the beginning of the list.
*/