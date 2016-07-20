/*
* Question: animal shelter
* Time / Space Complexity: O(1) / O(n)
* Author: Mingchao Zou, Jul 20
*/

import java.io.*;
import java.util.*;

public class Shelter{

    private final static String CAT = "CAT";
    private final static String DOG = "DOG";
    private static int TIMER = 9999999;

    private static class Pet{
        String name;
        String type;
        int count;

        public Pet(String name, String type){
            this.name = name;
            this.type = type;
            this.count = Shelter.TIMER--;
        }

        public int getCount(){
            return count;
        }

        public String toString(){
            return "Name: " + this.name + "  Type: " + this.type;
        }
    }

    LinkedList dogList;
    LinkedList catList;

    public Shelter(){
        this.dogList = new LinkedList<Pet>();
        this.catList = new LinkedList<Pet>();
    }

    public boolean isEmpty(){
        return dogList.size() == 0 && catList.size() == 0;
    }

    public void enqueue(Pet pet){
        if(pet.type.equals(Shelter.DOG))
            dogList.add(pet);
        else
            catList.add(pet);
    }

    public Pet dequeueAny(){
        Pet temp;
        if(((Pet)dogList.getFirst()).getCount() > ((Pet)catList.getFirst()).getCount())
            temp = dequeueDog();
        else    
            temp = dequeueCat();

        return temp;
    }

    public Pet dequeueCat(){
        return (Pet)catList.remove();
    }

    public Pet dequeueDog(){
        return (Pet)dogList.remove();
    }

    public static void main(String[] args){
        Shelter test = new Shelter();
        test.enqueue(new Pet("mi", Shelter.CAT));
        test.enqueue(new Pet("mi1", Shelter.CAT));
        test.enqueue(new Pet("mi2", Shelter.CAT));      
        test.enqueue(new Pet("wa", Shelter.DOG));
        test.enqueue(new Pet("wa2", Shelter.DOG));
        test.enqueue(new Pet("wa3", Shelter.DOG));
        test.enqueue(new Pet("mi3", Shelter.CAT));
        test.enqueue(new Pet("wa4", Shelter.DOG));
        System.out.println(test.dequeueCat());
        System.out.println(test.dequeueAny());
        System.out.println(test.dequeueDog());
        System.out.println(test.dequeueAny());
        
    }
}

/*
* Lesson: a "rollover" system if it requries each stack being at full capacity.
*/