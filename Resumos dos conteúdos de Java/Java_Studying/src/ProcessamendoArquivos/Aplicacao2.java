package ProcessamendoArquivos;

import java.io.Closeable;
import java.io.IOException;

class MinhaClasse implements Closeable {

    @Override
    public void close() throws IOException {
        System.out.println("Fechado!");
    }
}

public class Aplicacao2 {

    public static void main(String[] args) {


        try(MinhaClasse var = new MinhaClasse();) {

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
