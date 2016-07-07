/**
* Question: Given two strings, write a function check if they are one edit away.
* Solution: Use a array to count the number of each characters in a string, then substract it when iterate through another string.
* Time / Space Complexity: O(n) / O(1)
* Author: Mingchao Zou Jul 6
*/

import java.io.*;
import java.lang.*;

class OneWay{
    private final int NUMCHAR = 128;
    boolean oneWay(String s1, String s2){
        if(s1.equals(s2))
            return true;

        if(Math.abs(s1.length() - s2.length()) > 1)
            return false;

        int[] map = new int[NUMCHAR];

        for(int i = 0; i < s1.length(); i++)
            map[s1.charAt(i)]++;

        for(int i = 0; i < s2.length(); i++){
            if(map[s2.charAt(i)] > 0)
                map[s2.charAt(i)]--;
        }

        int count = 0;
        for(int i : map)
            count += i;

        return count == 1;
    }   

    public static void main(String[] args){
        OneWay test = new OneWay();
        System.out.println(test.oneWay("pale", "ple"));
        System.out.println(test.oneWay("pales", "pale"));
        System.out.println(test.oneWay("pale", "bale"));
        System.out.println(test.oneWay("pale", "bake"));
        System.out.println(test.oneWay("ppale", "pale"));
        System.out.println(test.oneWay("pspale", "pale"));

    }
}

/*
* Conclusion: an alternative approach is to make use of properties of these three operations when deal with string.
* Repalcement: only one difference; Insertion / Removal: one shift in the longer string.
*/