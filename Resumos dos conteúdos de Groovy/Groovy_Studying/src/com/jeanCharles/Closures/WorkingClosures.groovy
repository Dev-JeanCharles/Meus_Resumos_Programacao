package com.jeanCharles.Closures

//Closure
def c = {}
println(c.class.name)

def sayHello = { name ->
    println("Hello, $name")
}

sayHello("Jean")

List nums = [1,2,3,4,5,30,12]

nums.each {num ->
    println num
}

def timesTen(num, closure) {
    closure(num * 10)
}
timesTen(10) {
    println(it)
}

timesTen(2) {
    println(it)
}

10.times {
    println(it)
}

Random random = new Random()

3.times {
    println(random.nextInt())
}