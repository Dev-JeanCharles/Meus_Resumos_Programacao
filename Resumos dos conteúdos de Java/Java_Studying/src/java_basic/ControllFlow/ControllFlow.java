package java_basic.ControllFlow;

public class ControllFlow {
    public static void main(String[] args) {

        boolean fome = true;

        if (fome) {
            System.out.println("Eu estou com fome ...");
        } else {
            System.out.println("Eu não estou com fome ...");
        }

        int classificacaoFome = 5;
        if (!(classificacaoFome != 6)) {
            System.out.println("Não tem fome");
        } else {
            System.out.println("Tem fome");
        }

        int temperaturaFavorita = 24;
        int temperaturaAtual = 40;
        String opiniao;


        if (temperaturaFavorita != temperaturaAtual) {
            if (temperaturaAtual <= temperaturaFavorita - 30) {
                opiniao = "Está muito frio";
            } else if (temperaturaAtual <= temperaturaFavorita - 20) {
                opiniao = "Está pouco frio";
            } else if (temperaturaAtual >= temperaturaFavorita + 10) {
                opiniao = "Está muito quente";
            } else {
                opiniao = "Este é um dia bonito";
            }
        }
            else{
                opiniao = "Temperatura não encontrada";
            }



            System.out.println(opiniao);

            int mes = 2;
            String mesString;

            switch (mes) {
                case 1: mesString = "Janeiro";
                    break;
                case 2: mesString = "Fevereiro";
                    break;
                case 3: mesString = "Março";
                    break;
                case 4: mesString = "Abril";
                    break;
                default: mesString = "Mês não encontrado";
                    break;
            }
        System.out.println(mesString);


        }
    }
