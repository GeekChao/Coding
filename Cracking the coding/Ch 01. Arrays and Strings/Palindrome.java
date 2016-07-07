/**
* Question: Given a string, check if it is a permutation of a Palindrome.
* Solution: First find all permutations of the given string, then check all of them.
* Time / Space Complexity: O(n * n!) / O(n!)
* Author: Mingchao Zou Jul 5
*/

import java.io.*;
import java.lang.*;

class Palindrome{

    public boolean isPalindrome(String str){
        int start, end;
        for(start = 0, end = str.length() - 1; start < str.length() / 2; start++, end--){
            if( str.charAt(start) != str.charAt(end) ){
                if(start == str.length() / 2 - 1)
                    return true;
                else
                    return false;
            }
        }
        return true;
    }

    public void permutation(String str, String prefix){
        if(str.length() == 0){
            if(isPalindrome(prefix))
                System.out.println(prefix);
            return;
        }

        for(int i = 0; i < str.length(); i++){
            //prefix += str.charAt(i); //Wrong: use the next state as a current one.
            String substr = str.substring(0, i) + str.substring(i + 1);
            permutation(substr, prefix + str.charAt(i));//pass next state
        }
    }

    public void listPalinPermutation(String str){
        permutation(str.toLowerCase(), "");
    }

    public static void main(String[] args){
        Palindrome test = new Palindrome();
        test.listPalinPermutation("Tact Coa");
    }
}

/*
* Conclusion: Do not need to generate all permutations in order to check if one is a Palindrome.
* All we need to do is to take advantage of the Palindrome character to solve problem. 
* Its property is that a string can have no more than one character that is odd. 
* Lesson: Keep track of right state when recursive call.
*/