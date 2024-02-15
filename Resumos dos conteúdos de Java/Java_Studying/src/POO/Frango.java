package POO;

public class Frango extends Passaros {
    public Frango(String especieAnimal, String nomeAnimal, int idade, String corAnimal, String tipoAnimal) {
        super(especieAnimal, nomeAnimal, idade, corAnimal, tipoAnimal);
    }

    // Overriding (substituição) Não é uma boa prática
//    public void voar() {
//        System.out.println("");
//        System.out.println("Não pode voar");
//
//    }



}
