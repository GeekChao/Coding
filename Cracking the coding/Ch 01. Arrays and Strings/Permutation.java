/**
* Question: Given two strings, decide if one is a permutation of the other
* Solution: Put each character of a given string into a hashmap, then check wether every character 
* in another string exists when iterate through the string.
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou Jul 5
**/

import java.io.*;
import java.lang.*;
import java.util.*;

class Permutation{

    private HashMap map = new HashMap<String, String>();

    public boolean isPermutation(String src, String target){
        if(src.length() != target.length())
            return false;

        if(src.equals(target))
            return false;

        for(int i = 0; i < src.length(); i++){
            String ch = src.substring(i, i + 1);
            map.put(ch, ch);
        }

        for(int i = 0; i < target.length(); i++){
            String ch = target.substring(i, i + 1);
            if(map.containsKey(ch) != true)
                return false;
            map.remove(ch);
        }

        return true;
    }

    private String sort(String s){
        char[] strArr = s.toCharArray();
        java.util.Arrays.sort(strArr);
        return new String(strArr);
    }

    public boolean isPermutation2(String s, String t){
        if(s.length() != t.length())
            return false;
        if(s.equals(t))
            return false;
        return sort(s).equals(sort(t));
    }

    public static void main(String[] args){
        Permutation test = new Permutation();

        System.out.println("Test Permutation.....");
        if(test.isPermutation("abcd", "abcd"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
        
        if(test.isPermutation("abcd", "abcdf"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
        
        if(test.isPermutation("abcd", "acbd"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");

        if(test.isPermutation("acdd", "adcd")) // Bug: just overwrite since same key d rather than hashcode
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
        
        System.out.println("Test Permutation2.....");

        if(test.isPermutation2("abcd", "abcd"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
        
        if(test.isPermutation2("abcd", "abcdf"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
        
        if(test.isPermutation2("abcd", "acbd"))
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");

        if(test.isPermutation2("acdd", "adcd")) 
            System.out.println("Permutation");
        else
            System.out.println("Not Permutation");
    }
}

/**
* Conclusion: 
* 1. Hash tables deal with collsions: http://stackoverflow.com/questions/4980757/how-do-hashtables-deal-with-collisions
* 2. If these keys have same value, they are just overwriten: http://stackoverflow.com/questions/19691920/collision-resolution-in-java-hashmap
*/