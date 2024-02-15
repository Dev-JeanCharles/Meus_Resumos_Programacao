package Threads;

public class Threading {

    public static void main(String[] args) {
        System.out.println("Começando Threading 1");
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 1000; i++) {
                    System.out.println("number: " + i + " - " + Thread.currentThread().getName());
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });
        t1.start();

        System.out.println("Começando Threading 2");
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 1000; i++) {
                    System.out.println("number: " + i + " - " + Thread.currentThread().getName());
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        });
        t2.start();
        }
    }

class Task implements Runnable {

    String name;

    public Task(String name) {
        this.name = name;
    }

    public void run() {
        for (int i = 0; i < 1000; i++) {
            Thread.currentThread().setName(name);
            System.out.println("number: " + i + " - " + Thread.currentThread().getName());
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
