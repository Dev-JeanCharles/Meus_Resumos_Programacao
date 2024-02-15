package Threads.client;

import Threads.inventory.InventoryManager;

public class Application {
    public static void main(String[] args) throws InterruptedException {

        InventoryManager im = new InventoryManager();

        Thread inventoryTask = new Thread(new Runnable() {
            @Override
            public void run() {
                im.popularProdutosComprados();
            }
        });
        Thread displayTask = new Thread(new Runnable() {
            @Override
            public void run() {
                im.mostrarProdutosComprados();
            }
        });

        inventoryTask.start();
        Thread.sleep(2000);
        displayTask.start();
    }
}
