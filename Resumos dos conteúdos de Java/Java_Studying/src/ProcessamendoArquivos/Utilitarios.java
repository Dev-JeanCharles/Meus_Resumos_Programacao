package ProcessamendoArquivos;

import ProcessamendoArquivos.exceptions.FooRuntimeException;

public class Utilitarios {

    public int subtrairExtenso(int numero) throws FooRuntimeException {
        if (numero < 10) {
            throw new FooRuntimeException("O numero é menor do que 10 :)");
        }
        return numero - 10;
    }




}
