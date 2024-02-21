package com.jeanCharles.Closures

def writer = {
    append 'Jean'
    append 'Vive no Rio de Janeiro'
}

def append(String s) {
    println("append() está sendo chamando com o argumento de $s")
}

StringBuffer sb = new StringBuffer()
println(writer.resolveStrategy = Closure.DELEGATE_FIRST)
writer.delegate = sb
writer()

