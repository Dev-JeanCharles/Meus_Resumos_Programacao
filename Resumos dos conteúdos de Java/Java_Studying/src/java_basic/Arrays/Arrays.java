package java_basic.Arrays;

public class Arrays {
    public static void main(String[] args) {

        double [] values = new double[100];
        values[0] = 1000;
        values[1] = 43.32;
        values[99] = 94556;

        System.out.println(values[0]);

        String [] words = new String[] {"My", "Name", "Is"};

        System.out.println(words[2]);

        words = new String[10];

        System.out.println(words[0]);
    }
}
