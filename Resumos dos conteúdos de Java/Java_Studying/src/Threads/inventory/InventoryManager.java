package Threads.inventory;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;
import java.util.concurrent.CopyOnWriteArrayList;

public class InventoryManager {

    List<Product> listarProdutos = new CopyOnWriteArrayList<Product>();
    List<Product> produtosComprados = new ArrayList<Product>();


    public void popularProdutosComprados() {
        for (int i = 0; i < 1000; i++) {
            Product prod = new Product(i, "teste_produto_" + i);
            listarProdutos.add(prod);

            System.out.println("Produto adicionado: " + prod);
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

        }
    }

    public void mostrarProdutosComprados() {
        for (Product product : listarProdutos) {
            System.out.println("Produto mostrado: " + product);
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
