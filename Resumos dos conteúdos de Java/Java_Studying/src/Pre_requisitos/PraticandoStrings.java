package Pre_requisitos;

import java.lang.String;

public class PraticandoStrings {

    public static void main(String[] args) {


//         Buscar a posição de uma string da direita e esquerda:
        String str = "Ola Jean me chamo Jean chamo";

        int a = str.indexOf("Jean");

        int b = str.lastIndexOf("Jean");

        System.out.println(a);
        System.out.println(b);

//         Extrair Strings:
//        String c = "hello  %%$%¨$@>>>>< ";
//        System.out.println(c.length());

        String str2 = "ABCDEFG";

        String extrairString = str2.substring(2);

        System.out.println(extrairString);

//        String c = "hello";
//        String b = "World";

        // Ver a letra na posição da String:
//        System.out.println(a.charAt(3));

        // Comparação de strings:
//        if (a == "hello") {
//            // Forma para comparar (armadilha) pois não se pode comparar string dessa forma
//        }
//
//        if (a.equals("hello")) {
//            // Forma ideal de comparação
//        }
//
//        if (b.equalsIgnoreCase("wOrLd")) {
//            System.out.println("É igual!");
//        }
//        else {
//            System.out.println("Não é igual!");
//        }

    }
}
