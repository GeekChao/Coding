/*
* Question: sort a stack such that the smallest item on the top
* Solution: use another stack
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou, Jul 20
*/

import java.io.*;

public class SortStack extends Stack<Integer>{

    public void sort() throws Exception{
        if(this.isEmpty())
            throw new Exception("Empty Stack");
        
        int min = 9999999;
        Stack<Integer> temp = new Stack<>();
        while(!this.isEmpty()){ //find the minimum element
            int data = this.pop();
            if(data < min)
                min = data;
            temp.push(data);
        }

        boolean escapeMin = false; //in a case that more than one minimum element with the same value
        while(!temp.isEmpty()){
            int data = temp.pop();
            if(data == min && !escapeMin){
                escapeMin = true;
            }else{
                this.push(data);
            }
        }

        this.push(min);
    }

    public static void main(String[] args){
        SortStack test = new SortStack();
        try{
            test.push(2);
            test.push(5);
            test.push(2);
            test.push(10);
            test.push(8);
            test.sort();
            while(!test.isEmpty())
                System.out.println(test.pop());
        }catch(Exception exp){
            System.out.println(exp);
        }
    }

}

/*
* 
*/