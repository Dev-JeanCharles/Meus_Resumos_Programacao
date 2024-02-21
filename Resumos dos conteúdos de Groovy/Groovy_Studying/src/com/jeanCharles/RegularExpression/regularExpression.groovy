package com.jeanCharles.RegularExpression

// Expressões regulares em Groovy
String slashy = /a\b/
String url = $/hhtp://facebook.com/$

println slashy.class

def pattern = ~/a\b/
println pattern.class

// Find | Match

//def text = "Eu sou jean e você é meu fã, espero que goste de mim"
//def pattern2= ~/espero que goste/
//def finder = text =~ pattern2

//println finder
//println finder.size()
println matcher

//def text2 = "Jean é um fã de futebol"
//def pattern3 = ~/Jean é um fã de futebol/
//def matcher2 = text2 ==~ pattern3

//println matcher2

if (matcher) {
    def text= "Eu sou jean e você é meu fã, espero que goste de mim"
    def pattern2= ~/jean/

    text = text.replaceFirst(pattern2, "Buffalo")
    println text
}
