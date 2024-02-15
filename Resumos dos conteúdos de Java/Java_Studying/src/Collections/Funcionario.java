package Collections;

public class Funcionario implements Comparable<Funcionario>{

    String nome;
    int salario;
    String departamento;

    public Funcionario(String nome, int salario, String departamento) {
        this.nome = nome;
        this.salario = salario;
        this.departamento = departamento;
    }

    @Override
    public int compareTo(Funcionario o) {
        if (this.salario > o.salario) {
            return -1;
        } else if (this.salario < o.salario) {
            return 1;
        }
        return 0;
    }

    @Override
    public String toString() {
        return "Funcionario: " +
                nome +
                ", " + salario +
                ", " + departamento;
    }
}
