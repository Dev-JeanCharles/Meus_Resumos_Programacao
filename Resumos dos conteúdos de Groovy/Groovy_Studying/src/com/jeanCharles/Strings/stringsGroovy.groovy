package com.jeanCharles.Strings

// Trabalhando com Strings em Groovy:

// Java:
char c = "c"
println c.class

String str = "This is a String"
println str.class

// Groovy:

def c2 = 'c'
println c.class

def str2 = 'this is a string'
println str2.class

// interpolação de string:

String name = 'Jean'

String ms2 = "Hello ${name}"
println ms2

String ms3  = 'Hello ${name}'
println ms3

String ms4 = "Nós podemos realizar o seguinte cálculo: ${2+2}"
println ms4

// multiline com strings:

def grandeMensagem = """
Essa
mensagem
é 
do 
jean 
ele 
é 
legal
${4.5 + 3.5}
"""
println grandeMensagem

// dólar barrado

def arquivo = $/home/jeancharles/Documentos/$
println arquivo