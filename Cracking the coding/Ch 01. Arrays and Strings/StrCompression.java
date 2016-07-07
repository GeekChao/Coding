/**
* Question: Using the counts of repeated characters to compress a string.
* Solution: Iterate the string.
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 6
*/

import java.io.*;
import java.lang.*;

class StrCompression{

    String compress(String str){
        int cur = 0;
        int prev = 0;
        char ch;
        StringBuilder newStr = new StringBuilder();

        while(prev < str.length()){
            int count = 1;
            ch = str.charAt(prev);
            cur = prev + 1;

            while(cur < str.length()){
                if(str.charAt(cur) == ch){
                    count++;
                    cur++;
                }else{
                    newStr.append(ch);
                    newStr.append(count);
                    prev = cur;
                    break;
                }
            }

            if(cur == str.length()){ //last repeated characther in the string.
                newStr.append(ch);
                newStr.append(count);
                prev = cur;
            }
        }

        return (str.length() < newStr.length())? str : newStr.toString(); 
    }

    public String compress2(String str){
        StringBuilder newStr = new StringBuilder();
        int count = 0;

        for(int i = 0; i < str.length(); i++){
            count++;
            if(i + 1 >= str.length() || str.charAt(i) != str.charAt(i + 1)){
                newStr.append(str.charAt(i));
                newStr.append(count);
                count = 0;
            }
        }
        
        return (str.length() < newStr.length())? str : newStr.toString(); 

    }

    public static void main(String[] args){
        StrCompression test = new StrCompression();
        System.out.println(test.compress("aabcccccaaa"));
        System.out.println(test.compress("abcds"));
        System.out.println(test.compress2("aabcccccaaa"));
        System.out.println(test.compress2("abcds"));
    }
}

/*
* Lesson: 'for' is good at cotinuous iteration; whereas 'while' works better with discrete iteration.
* Conclusion: think much before coding.
*/