package POO;

public class Terra {
    public static void main(String[] args) {

        Humano newHuman = new Humano("Jean Charles", 19, 181, "castanho escuro");
        Humano newHuman2 = new Humano("Melissa Duarte", 17, 156, "verde");
        Humano newHuman3 = new Humano("Camilla Duarte", 44, 160, "verde");

        newHuman.falar();
        newHuman2.falar();
        newHuman3.falar();


        //Outra maneira:

//        Humano jean = new Humano();
//        jean.nome = "Jean Charles";
//        jean.corOlhos = "castanho escuro";
//        jean.altura = 181;
//        jean.idade = 19;
//
//        jean.falar();
//
//        Humano melissa;
//        melissa = new Humano();
//
//        melissa.nome = "Melissa Duarte";
//        melissa.corOlhos = "verde";
//        melissa.altura = 157;
//        melissa.idade = 17;
//
//        melissa.falar();
    }
}
