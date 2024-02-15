package POO;

public class Humano {

    String nome;

    int idade;

    int altura;

    String corOlhos;

    public Humano(String nome, int idade, int altura, String corOlhos) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.corOlhos = corOlhos;
    }

    public void falar() {
        System.out.println("");
        System.out.println("Olá, meu nome é "+ nome);
        System.out.println("Eu tenho "+ idade + " anos");
        System.out.println("Eu tenho "+ altura + " de altura");
        System.out.println("A cor dos meus olhos é "+ corOlhos);
    }

    public void comer() {
        System.out.println("Comendo");
    }

    public void caminhar() {
        System.out.println("caminhando");
    }

    public void trabalho() {
        System.out.println("trabalhando");
    }

}
