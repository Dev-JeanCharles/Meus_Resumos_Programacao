package com.jeanCharles.exercices.Tweet.Collections

def intervalo = EnumSet.range(Semana.Segunda, Semana.Sexta)
println intervalo
println intervalo.size()
println intervalo.contains(Semana.Quarta)

def primeiroElemento = intervalo.toList().first()
println "O primeiro elemento da lista é: $primeiroElemento"

def ultimoElemento = intervalo.toList().last()
println "O último elemento da lista é: $ultimoElemento"

def dias = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
println dias
println dias.size()

dias.removeAt(6)
println(dias)

dias.putAt(6, "Sabado")
println(dias)

println(dias [3])

def diasSemana = [1:"Domingo", 2:"Segunda", 3:"Terca", 4:"Quarta", 5:"Quinta", 6: "Sexta", 7:"Sabado"]
println diasSemana
println diasSemana.getClass().getName()
println diasSemana.size()

diasSemana.each {key, value -> println("$key = $value" )}