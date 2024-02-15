package Generics;

import java.util.ArrayList;
import java.util.List;

public class Generics2 {

    public static void main(String[] args) {

        Object object = new Object();
        String myVar = "hello";
        object = myVar;

        Employee e = new Employee();
        Accountant acc = new Accountant();
        e = acc;

        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee());
        ArrayList<Accountant> accountants = new ArrayList<>();
        accountants.add(new Accountant());
//        employees = accountants;


        ArrayList<?> employees2 = new ArrayList<>();
        ArrayList<String> accountants2 = new ArrayList<>();
        employees2 = accountants2;

        // Limite subclasse superior:
        ArrayList<? extends Employee> employees3 = new ArrayList<>();
        ArrayList<Accountant> accountants3 = new ArrayList<>();
        employees3 = accountants3;

        // Limite de subclasse inferior:
        ArrayList<? super Employee> employees4 = new ArrayList<Employee>();
        ArrayList<Object> accountants4 = new ArrayList<>();
        employees4 = accountants4;

//        makeEmployeeWork(employees);
        makeEmployeeWork(accountants);

    }

    public static void makeEmployeeWork(List<? extends Employee> employees) {
        for (HRManager emp : (ArrayList<HRManager>) employees) {
//            emp.work();
        }
    }

}
