package com.jeanCharles.Closures

//Parametro implícito
def foo = {
    println(it)
}

foo("Jean")

def noparams = {
    println("Sem parametros...")
}
noparams()

def sayHello = { first, last ->

    println("Hello, $first $last")
}

sayHello("Jean", "Charles")

// Valores padrões
def greet = {String name, String greeting = "Saudações"->
    println("$greeting, $name")
}

greet("Jean", "Hello")
greet("Vitor")

// Variavel-Args
def concat = {String... args ->
    args.join('')
}
println(concat('abc', 'def'))
println(concat('abc', 'def', '123', '456'))

def someMethod(Closure c ) {
    println("...")
    println(c.maximumNumberOfParameters)
    println(c.parameterTypes)
}

def someClosure = {int x, int y  -> x + y}
someMethod(someClosure)