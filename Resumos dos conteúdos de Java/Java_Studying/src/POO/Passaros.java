package POO;

public class Passaros extends Animal{

    public Passaros(String especieAnimal, String nomeAnimal, int idade, String corAnimal, String tipoAnimal) {
        super(especieAnimal, nomeAnimal, idade, corAnimal, tipoAnimal);
    }

    public void mover() {
        System.out.println("O passaro " + especieAnimal + " com o nome " + nomeAnimal +" com a cor " + corAnimal + " e do tipo " + tipoAnimal +" está batendo as asas!");
    }
}
