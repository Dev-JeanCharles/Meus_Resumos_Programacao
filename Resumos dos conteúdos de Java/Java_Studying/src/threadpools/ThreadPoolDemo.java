package threadpools;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ThreadPoolDemo {
    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(2);

        Runnable runnable = new MessageProcessor(2);
        executor.execute(runnable);

        Runnable runnable2 = new MessageProcessor(3);
        executor.execute(runnable2);

        Runnable runnable3 = new MessageProcessor(4);
        executor.execute(runnable3);

        Runnable runnable4 = new MessageProcessor(4);
        executor.execute(runnable4);

//        executor.shutdown();
//        executor.shutdownNow();

//        try {
//            executor.awaitTermination(0, TimeUnit.SECONDS);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }


//        while (!executor.isTerminated()) {

//        }


        System.out.println("enviando");

    }
}
