package ProcessamendoArquivos;

import java.io.*;
import java.util.Scanner;

public class Aplicacao {

    public static void main(String[] args){




//        for (int i = 1; i <= 3; i++) {
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Entre com um texto: ");
//        String text = sc.nextLine();
//        System.out.println(text);
//    }

        File fi = new File("myfe.txt");

        try (FileReader fr = new FileReader(fi);
             BufferedReader br = new BufferedReader(fr);) {

            String line = br.readLine();

            while (line != null) {
                System.out.println(line);
                line = br.readLine();
            }

        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado.");
        } catch (IOException e) {
            System.out.println("Problemas ao ler o arquivo: " + fi.getName());
        }

//        Scanner sc = null;
//        try {
//            sc = new Scanner(fi);
//
//            while (sc.hasNextLine()) {
//                String line = sc.nextLine();
//                System.out.println(line);
//            }
//            sc.close();
//
//        } catch (FileNotFoundException e) {
//            System.out.println("Arquivo não encontrado hehe :)" + e);
////            throw new RuntimeException(e);
//        }
//
//        Utilitarios utilitarios = new Utilitarios();
//        try {
//            int var1 = utilitarios.subtrairExtenso(14);
//            System.out.println(var1);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }


    }
}
