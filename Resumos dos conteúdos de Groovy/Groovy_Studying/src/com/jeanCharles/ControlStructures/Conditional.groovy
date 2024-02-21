package com.jeanCharles.ControlStructures

// if ( boolean expression) { logic }

if (true) {
    println(true)
}

if (true)
    println(true)

def age = 35

if (age >= 35) {
    println("Você pode ser presidente")
}

if (false) {
    println(true)
} else {
    println(false)
}

def suaIdade = 20

if (suaIdade >= 20) {
    println("Dirige muito bem")
} else if (suaIdade == 17){
    println("Não dirige")
} else {
    println("Dirige mal em")
}

// Operação ternária (expression) ? true : false
// Elvis Operator

def name = "Jean"
def isitJean = (name.toLowerCase() == "JEAN") ? "YES" : "NO"
println(isitJean)

def msg
def output = (msg != null) ? msg : 'mensagem padrão'
def elvisOutput = msg ?: 'mensagem padrão'

println(msg)
println(output)
println(elvisOutput)

// Switch

def num = 12

switch (num) {
    case 1:
        println("1")
        break
    case 2:
        println("2")
        break
    case 1..3:
        println("o range é 1..3")
        break
    case [1,2,3,4,12]:
        println("Estes numeros estão em uma lista")
        break
    case Integer:
        println("Numero é um inteiro")
        break
    case Float:
        println("Numero é um float")
        break
    default:
        println("default...")
}

// in

def validAges = 19..25

def someAges = 20
println(someAges in validAges)