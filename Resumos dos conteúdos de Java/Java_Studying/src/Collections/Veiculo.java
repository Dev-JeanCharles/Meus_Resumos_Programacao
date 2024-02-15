package Collections;

public class Veiculo {

    String marca;
    String modelo;
    int preco;
    boolean quatroRodas;

    public Veiculo(String marca, String modelo, int preco, boolean quatroRodas) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.quatroRodas = quatroRodas;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public boolean isQuatroRodas() {
        return quatroRodas;
    }

    public void setQuatroRodas(boolean quatroRodas) {
        this.quatroRodas = quatroRodas;
    }

    @Override
    public String toString() {
        System.out.println(" ");
        return "Veiculo: \n" +
                marca  +
                ", "+ modelo +
                ", "+ preco +
                ", " + quatroRodas;
    }
}
