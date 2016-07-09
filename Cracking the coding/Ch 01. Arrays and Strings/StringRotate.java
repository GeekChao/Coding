/**
* Question: Given two strings, check if s2 is a rotation of s2.
* Solution: Find the substring rotated when iterate the given s2.
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 9
*/

import java.io.*;
import java.lang.*;

class StringRotate{

    public boolean strRotate(String s1, String s2){
        if(s1.length() != s2.length())
            return false;

        int i = 0;
        while(i++ < s2.length()){
            if(s2.charAt(i) == s1.charAt(0)) 
                break;
        }

        if(i == s2.length()){
            return false;
        }else{
            if(s1.contains(s2.substring(0, i))){
                String str = s2.substring(i) + s2.substring(0, i);
                if(str.equals(s1))
                    return true;
                else    
                    return false;
            }else{
                return false;
            }
        }
    }

    public static void main(String[] args){
        StringRotate test = new StringRotate();
        System.out.println(test.strRotate("erbottlewat", "waterbottle"));
        System.out.println(test.strRotate("Helo", "loHel"));
        System.out.println(test.strRotate("Heloa", "loHel"));
    }
}

/*
* Lesson: From the rotation property, we know that xy will always be a substring of xyxy.
* That is, s2 will always be a substring of s1s1.
*/