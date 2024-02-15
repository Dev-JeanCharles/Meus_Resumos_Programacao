package Lambda_practice;

import Lambda_practice.interfaces.ALambdaInterface;
import Lambda_practice.interfaces.Divide;
import Lambda_practice.interfaces.NumberFactorial;

public class Application {
    public static void main(String[] args) {
        Human tom = new Human();
//        walker(tom);

        Robot wale = new Robot();
//        walker(wale);

        walker(() -> System.out.println("Custom object walking..."));

        Walkable aBlockofCode = () -> {
            System.out.println("Custom object walking...");
            System.out.println("The object tripped...");

        };

        walker(aBlockofCode);

        ALambdaInterface hellovar = ()-> System.out.println("hello there");
        hellovar.someMethod();

        sumVar var = (int arg1, int arg2)-> arg1+arg2;
        System.out.println(var.sumVar(2,2));

        Divide var1 = (int arg1, int arg2)->{
            if (arg1 == 0){
                return 0;
            }
            return arg1/arg2;
        };

        StringReverse<String> var2 = (String str)-> {
            String result = "";
            for (int i = str.length() -1; i >= 0; i--) {
                result += str.charAt(i);
            }
            return result;
        };

        NumberFactorial<Integer> var3 = (num)-> {
            int result = 1;
            for (int i = 1; i <= num; i++) {
                result = i*num;
            }
            return result;
        };

        System.out.println(var1.nonZeroDivide(0,2));
        System.out.println(var2.reverse("Ola mundo eu sou o Jean"));
        System.out.println(var3.factorial(25));
    }
    public static void walker(Walkable walkableEntity) {
        walkableEntity.walk();
    }

    public void sayHello() {
        System.out.println("hello there");
    }

    public int nonZeroDivide(int arg1, int arg2) {
        if (arg1 == 0) {
            return 0;
        }
        return arg1/arg2;
    }

    public int factorial(int num) {
        int result = 1;
        for (int i = 1; i <= num; i++) {
            result = i*num;
        }
        return result;
    }

    public String reverse(String str) {
        String result = "";
        for (int i = str.length() -1; i >= 0; i--) {
            result = result + str.charAt(i);
        }
        return result;
    }

    public int sum(int arg1, int arg2) {
        return arg1+arg2;
    }

    public static interface StringReverse<T> {

        public T reverse(T t);
    }

    static interface sumVar {

        public int sumVar(int arg1, int arg2);
    }

    @FunctionalInterface
    public static interface Walkable {
        public void walk();
    }
}
