package Collections;

import java.util.Objects;

public class Animais {

    String nome;
    int idade;

    public Animais(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    @Override
    public String toString() {
        System.out.println(" ");
        return "Animais: \n" +
                nome +
                ", " + idade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animais animais = (Animais) o;
        return idade == animais.idade && Objects.equals(nome, animais.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, idade);
    }
}
