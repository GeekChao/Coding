/**
* Question: Replace all spaces in a string with %20
* Solution: Iterate through string
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou Jul 5
*/

import java.io.*;
import java.lang.*;

class URLify{

    public String urlify(String str){
        int end = -1, start = -1;
        char ch;
        char[] charArr = new char[str.length() * 2];

        for(int i = str.length() - 1; i >= 0; i--){
            ch = str.charAt(i);
            if(ch != ' '){
                end = i;
                break;
            }
        }

        for(int i = 0; i < str.length(); i++){
            ch = str.charAt(i);
            if(ch != ' '){
                start = i;
                break;
            }
        }

        for(int i = start, j = 0; i <= end; i++, j++){
            ch = str.charAt(i);
            if(ch == ' '){
                charArr[j++] = '%';
                charArr[j++] = '2';
                charArr[j] = '0';
            }else{
                charArr[j] = ch;
            }
        }

        return new String(charArr);
    }

    public static void main(String[] args){
        URLify test = new URLify();
        System.out.println(test.urlify("  Mr John Smith     "));
    }
}

/**
* Conclusion: a string can be assigned to char[] str.
*/