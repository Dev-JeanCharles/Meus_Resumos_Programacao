package POO;

public class Peixes extends Animal{

    public Peixes(String especieAnimal, String nomeAnimal, int idade, String corAnimal, String tipoAnimal) {
        super(especieAnimal, nomeAnimal, idade, corAnimal, tipoAnimal);
    }

    public void mover() {
        System.out.println("");
        System.out.println("O peixe " + especieAnimal + " com o nome " + nomeAnimal +" com a cor " + corAnimal + " e do tipo " + tipoAnimal +" está saindo do seu bando!");
    }

    public void nadar() {
        System.out.println("");
        System.out.println("O peixe " + especieAnimal + " com o nome " + nomeAnimal +" com a cor " + corAnimal + " e do tipo " + tipoAnimal +" está nadando!");

    }
}
