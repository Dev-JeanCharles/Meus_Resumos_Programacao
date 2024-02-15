package Lambda_practice2;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class App {
    public static void main(String[] args) {

        List<Car> cars = Arrays.asList(
                new Car("Honda", "Accord", "Red", 22300),
                new Car("Honda", "Civic", "Blue", 17700),
                new Car("Toyota", "Land Cruiser", "White", 48500),
                new Car("Toyota", "Corolla", "Black", 16200),
                new Car("Toyota", "Camry", "Blue", 24000),
                new Car("Nissan", "Sentra", "White", 17300),
                new Car("Mitsubishi", "Lancer", "White", 20000),
                new Car("Jeep", "Wrangler", "Red", 24500)
        );


        Function<Car, String> priceAndColor = (c)-> "price = " + c.getPrice() + " color = " + c.getColor();
        String stringCar = priceAndColor.apply(cars.get(1));
        System.out.println(stringCar);

//        printCarsPriceRange(cars, 18000,22000);
//        printCarByColor(cars, "Red");



        System.out.println("Imprimindo carros entre o preço de 18000 e 22000");
        printCars(cars, (c) -> c.getPrice() >= 18000 && c.getPrice() <= 22000);

        System.out.println("Imprimindo carros que são azul");
        printCars(cars, (c) -> c.getColor().equals("Blue"));

    }
    public static void printCars(List<Car> cars, Predicate<Car> predicate) {
        for (Car c : cars) {
            if (predicate.test(c)) {
                c.printCar();
            }
        }
    }
}

