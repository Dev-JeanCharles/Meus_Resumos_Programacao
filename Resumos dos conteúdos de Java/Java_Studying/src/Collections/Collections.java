package Collections;

import java.util.*;

public class Collections {

    // Intruducão de Coleções:

//    public static void main(String[] args) {

//        ArrayList<String> palavras = new ArrayList<String>();
//        palavras.add("Hello");
//        palavras.add("World");
//        palavras.add("10");

//        String item1 = palavras.get(2);
//        System.out.println(item1);

//        LinkedList<Integer> numeros = new LinkedList<Integer>();
//        numeros.add(100);
//        numeros.add(200);
//        numeros.add(45);
//        numeros.add(12);
//        numeros.add(5);
//        numeros.remove();

//        for(int numero : numeros) {
//            System.out.println(numeros);
//        }
//    }


    // Coleções com objetos e duas formas de varrer a coleção:

//    public static void main(String[] args) {

//        ArrayList<String> animais = new ArrayList<String>();
//        animais.add("Gato");
//        animais.add("Cachorro");
//        animais.add("Papagaio");
//        animais.add("Coelho");

//        for (int i = 0; i < animais.size(); i++) {
//            System.out.println(animais.get(i));

//        }

//        for (String valor : animais) {
//            System.out.println(valor);
//        }

//    }

    // Coleção de carros:

//    public static void main(String[] args) {

//        ArrayList<Veiculo> veiculos = new ArrayList<Veiculo>();
//        List<Veiculo> veiculos = new LinkedList<Veiculo>();

//        Veiculo veiculo2 = new Veiculo("Toyota", "Camery", 1200, false);
//        veiculos.add(new Veiculo("Fiat", "Grand Siena", 45000, true));
//        veiculos.add(veiculo2);
//        veiculos.add(new Veiculo("Honda", "accord", 2500, false));

//        for (Veiculo veiculoArrayList : veiculos) {
//            System.out.println(veiculoArrayList.getModelo());
//            System.out.println(veiculoArrayList.getMarca());
//            System.out.println(veiculoArrayList.getModelo());
//            System.out.println(veiculoArrayList.getPreco());
//            System.out.println(veiculoArrayList.isQuatroRodas());

//        imprimirElementos(veiculos);
//        }

//    public static void imprimirElementos(List listas) {

//        for (int i = 0; i < listas.size(); i++) {
//            System.out.println(listas.get(i));

//        }
//    }
//}

    // LinkedHashSet, equals, hashcode:

//    public static void main(String[] args) {
//        LinkedHashSet<Animais> animais = new LinkedHashSet<Animais>();

//        Animais animal1 = new Animais("Cachorro", 12);
//        Animais animal2 = new Animais("Gato", 19);
//        Animais animal3 = new Animais("Cachorro", 12);
//        Animais animal4 = new Animais("Tartaruga", 20);

//        animais.add(animal1);
//        animais.add(animal2);
//        animais.add(animal3);
//        animais.add(animal4);

//        boolean var = animal1.equals(animal3);
//        System.out.println(var);

//        System.out.println(animal1.hashCode());
//        System.out.println(animal3.hashCode());

//        for (Animais valores : animais) {
//            System.out.println(valores);
//        }
//    }

    // Conversão de HashSet para ArrayList:

//    public static void main(String[] args) {
//
//        HashSet<Funcionario> hashSet = new HashSet<Funcionario>();
//
//        hashSet.add(new Funcionario("Mike", 3500, "Contabilidade"));
//        hashSet.add(new Funcionario("Paul", 1000, "Computador"));
//        hashSet.add(new Funcionario("Peter", 4000, "Administração"));
//        hashSet.add(new Funcionario("Angel", 1020, "Produto"));
//
//        ArrayList<Funcionario> minhaLista = new ArrayList<Funcionario>(hashSet);
//
//        java.util.Collections.sort(minhaLista);
//        System.out.println(minhaLista);


    // Outros métodos que podem serem utilizados:

//    public static void main(String[] args) {

//        HashSet<Integer> list1 = new HashSet<Integer>();
//        list1.add(10);
//        list1.add(43);
//        list1.add(92);
//        list1.add(45);
//        list1.add(11);
//        list1.add(3);

//        ArrayList<Integer> newList = new ArrayList<Integer>();
//        newList.add(23);
//        newList.add(76);
//        newList.add(9);

//        List<Integer> li = new ArrayList<Integer>(list1);

//        list1.clear();

//        System.out.println(li);
//    }

    // Maps: HashMap, LinkedHashMap e TreeMap:

//    public static void main(String[] args) {
//        HashMap<String, String> dicionario = new HashMap<String, String>();
//        TreeMap<String, String> dicionario = new TreeMap<String, String>();
//        dicionario.put("Corajoso", "Que ou aquele que não tem ou não demonstra ter medo; bravo, destemido, valente.");
//        dicionario.put("Inteligente", "Que ou aquele que possui mais inteligência que a média das pessoas.");
//        dicionario.put("Bonito", "Cuja forma, som ou cores agrada aos sentidos.");
//        dicionario.put("Musicista", "Que ou quem produz e/ou executa obras musicais; profissional da música; músico.");


//        dicionario.put("Inteligente", "dwadadadawdaww");

//    for (String palavras : dicionario.keySet()) {
//        System.out.println(dicionario.get(palavras));
//    }

//    for (Map.Entry<String, String> entrada : dicionario.entrySet()) {
//        System.out.println(entrada.getKey());
//        System.out.println(entrada.getValue());
//        }
//    }

}