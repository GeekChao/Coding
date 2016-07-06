/**
* Question: Determine if a string has all unique characters
* Solution: Using a boolean vector to keep track of the existence of characters 
* when iterate through the given string. 
* Time / Space Complexity: O(n) / O(1).
* Author: Mingchao Zou Jul 4, 2016
**/

import java.io.*;

class isUnique{
    private static final int NUM_CHAR = 24;
    private boolean[] vector = new boolean[NUM_CHAR];

    public void unique(String str){
        char ch;
        int pos;
        for(int i  = 0; i < str.length(); i++){
            ch = str.charAt(i);
            pos = (ch - 'a') % NUM_CHAR; // should use "vector[ch]" directly
            if(vector[pos] == false){ 
                vector[pos] = true;
            }else{
                System.out.println("The string has a common character: " + ch);
                return;
            }
        }

        System.out.println("The string has all unique characters");
    }

    public static void main(String[] args){
        isUnique test = new isUnique();
        test.unique("abdogwe");
        test.unique("sgsgp");
        test.unique("aaaaa");
    }
}

/**
* Conclusion: Lack knowledge of ASCII string. 
* Each character has a corresponding decimal number.
*/