package threadpools;

public class MessageProcessor implements Runnable{

    private int message;

    public MessageProcessor(int message) {
        this.message = message;
    }

    @Override
    public void run() {

        System.out.println(Thread.currentThread().getName()+ " [RECEBIDO] Message = "+ message);
        respondToMessage();
        System.out.println(Thread.currentThread().getName() + "[FIM] Processing Message = " + message);

    }

    private void respondToMessage() {

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            System.out.println("Impossível processar a mensagem " + message);
        }

    }
}
