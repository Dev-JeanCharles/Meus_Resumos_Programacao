package POO;

public abstract class Animal {
    String especieAnimal;
    String nomeAnimal;
    int idade;
    String corAnimal;
    String tipoAnimal;

    public Animal(String especieAnimal, String nomeAnimal, int idade, String corAnimal, String tipoAnimal) {
        this.especieAnimal = especieAnimal;
        this.nomeAnimal = nomeAnimal;
        this.idade = idade;
        this.corAnimal = corAnimal;
        this.tipoAnimal = tipoAnimal;
    }

    public void identidadeAnimal() {
        System.out.println("");
        System.out.println("A espécie desse animal é " + especieAnimal);
        System.out.println("Esse animal se chama " + nomeAnimal);
        System.out.println(nomeAnimal + " tem " + idade + " anos");
        System.out.println(nomeAnimal + " tem a cor " + corAnimal);
        System.out.println(nomeAnimal + " é do tipo " + tipoAnimal);
    }

    public void comer() {
        System.out.println("");
        System.out.println("A espécie " + especieAnimal + " que se chama " + nomeAnimal + " está comendo");
    }

    public void dormir() {
        System.out.println("");
        System.out.println("A espécie " + especieAnimal + " que se chama " + nomeAnimal + " está dormindo");
    }

    public abstract void mover();

}
