package com.jeanCharles.SimpleDate

// Tipos primitivos
byte  b = 1
char  c = 2
short s = 3
int   i = 4
long  l = 5

// Trabalhando com números em groovy:

def number = 10;
println number.class

def decimal = 5.50;
println decimal.class

// Conversão de tipos de dados:
//----------------------------------------
//Explícito - casting:

def myFloat = (float) 1.0
println myFloat.class

// Times | upto | downto | step

20.times {
    print '-'
}

1.upto(10) {num ->
    println num
}

10.downto(1) {num ->
    println(num)
}

0.step(1,0.1) {num ->
    println num
}
