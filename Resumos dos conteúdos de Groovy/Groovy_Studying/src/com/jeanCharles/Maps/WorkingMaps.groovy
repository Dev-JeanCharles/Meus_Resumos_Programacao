package com.jeanCharles.Maps

def map = [:]
println map
println map.getClass().getName()

def person = [first:"Jean", last:"Charles", email: "jeancduasan@gmail.com"]
println person
println person.email

// Adicionar uma nova chave e valor ao Map
person.instagram = "@jeancharles14"
println person

// Adicionar uma nova chave e valor por variável:
def emailKey = "EmailAddress "

def instagram = [username: "jeancharles14",(emailKey): "jeancduasan@gmail.com"]
println instagram

// Tamanho de um Map
println person.size()

// Map ordenado
println person.sort()

// Loop em um Map

for (entry in person) {
    println entry
}

for (key in person.keySet()) {
    println "$key:${person[key]}"
}

//