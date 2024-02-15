package Generics;

import java.util.*;

public class Generics {

    public static void main(String[] args) {

        Container<Integer, String> container = new Container<>(12, "Hello");
         int val1 = container.getItem1();
         String val2 = container.getItem2();

         Set<String> mySet1 = new HashSet<>();
         mySet1.add("first");
         mySet1.add("second");
         mySet1.add("third");

        Set<String> mySet2 = new HashSet<>();
        mySet1.add("first");
        mySet1.add("second");
        mySet1.add("Computer");

        Set<String> result = uniao(mySet1, mySet2);

        Iterator<String> itr = result.iterator();
        while (itr.hasNext()) {
            String var = itr.next();
            System.out.println(var);
        }


        ArrayList<String> myList = new ArrayList<String>();
        myList.add("hello");

        String myval = (String) myList.get(0);
        String myval2 = (String) myList.get(1);
    }

    public static <E> Set<E> uniao(Set<E> set1, Set<E> set2) {
        Set<E> result = new HashSet<>(set1);
        result.addAll(set2);
        return result;
    }
}
