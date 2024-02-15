package Stream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class App {
    public static void main(String[] args) throws IOException {

        // Imprimir os numeros de 1 a 9:
        IntStream.range(1,10).forEach(System.out::print);
        System.out.println();

        // Imprimir os numeros de 1 a 9 pulando os 5 primeiros numeros:
        IntStream.range(1,10).skip(5).forEach(System.out::print);
        System.out.println();

        // Imprimir os numeros de 1 a 5 somando todos os elementos:
        int val = IntStream.range(1,5).sum();
        System.out.println(val);

        // Imprimir o primeiro elemento da lista de strings ordenado:
        Stream.of("Hello", "bottle", "Africa").sorted().findFirst()
                .ifPresent(System.out::println);


        // Imprimir os elementos do Array ordenados e filtrados pela primeira letra:
        String[] item = {"car", "computer",  "toothpaste", "box",
                "pencil", "tent", "door", "toy"};
        Stream.of(item).filter((x)-> x.startsWith("t")).sorted().forEach(x ->
                System.out.print(x + ", "));
        System.out.println();

        // Calcular a média dos elementos elevados ao quadrado:
        Arrays.stream(new int [] {2, 4, 6, 8, 10 }).map((x)-> x*x ).average()
                .ifPresent(System.out::print);
        System.out.println();

        // Outra maneira de imprimir uma lista de Array!!
        // Imprimir os primeiros elementos de uma lista de Array que
        // começam com alguma letra:
    List<String> lisOfItems = Arrays.asList("Computer", "Toothpaste", "Box",
            "Pencil", "Car", "Tent", "Door", "Toy");
    lisOfItems.stream().map(String::toLowerCase).filter(x -> x.startsWith("c")).sorted()
            .forEach(System.out::println);


    LerArquivo();
    LerArquivo2();
    LerArquivo3();
    LerArquivo4();
    }

    //Ler arquivo filtrado pelo tamanho das linhas maior que 6:
    public static void LerArquivo() throws IOException {
        Stream<String> lines = Files.lines(Paths.get("wordFile.txt"));
        lines.sorted().filter(l -> l.length() > 6).forEach(x -> System.out.print(x + ", "));
        System.out.println();
        lines.close();
    }
    //Ler arquivo filtrado por campos específico com contains:
    public static void LerArquivo2() throws IOException {
        List<String> words = Files.lines(Paths.get("wordFile.txt"))
                .filter(x -> x.contains("th")).toList();
        words.forEach(x -> System.out.print(x + ", "));
        System.out.println();
    }

    // Ler arquivos que possuem mais de 3 linhas, separados por vírgula e contagem de elementos:
    public static void LerArquivo3() throws IOException {
        Stream<String> rows = Files.lines(Paths.get("stockDataCsv.txt"));
                int rowCount = (int) rows
                .map(x -> x.split(",")).filter(x -> x.length > 3)
                        .count();
        System.out.println(rowCount + " good rows.");
        rows.close();
    }

    public static void LerArquivo4() throws IOException {
        Stream<String> rows = Files.lines(Paths.get("stockDataCsv.txt"));
        rows.map(x -> x.split(",")).filter(x -> x.length > 3)
                .filter(x -> Integer.parseInt(x[1].trim()) > 15)
                .forEach(x -> System.out.println(x[0].trim() + " " + x[2].trim() + " " + x[3].trim()));
        System.out.println();
        rows.close();
    }

}

