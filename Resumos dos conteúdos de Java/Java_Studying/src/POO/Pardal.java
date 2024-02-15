package POO;

public class Pardal extends Passaros implements Voadores{
    public Pardal(String especieAnimal, String nomeAnimal, int idade, String corAnimal, String tipoAnimal) {
        super(especieAnimal, nomeAnimal, idade, corAnimal, tipoAnimal);
    }
    public void voar() {
        System.out.println("O " + especieAnimal + " que se chama " + nomeAnimal + " está voando alto!");
    }

    public void deitar() {
        System.out.println("Ele deita");
    }

}
