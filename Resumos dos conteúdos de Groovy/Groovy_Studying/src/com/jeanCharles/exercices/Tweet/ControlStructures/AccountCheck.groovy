package com.jeanCharles.exercices.Tweet.ControlStructures

Account checking = new Account()
checking.deposito(10.0)
println(checking.balance)

try {
checking.deposito(-1)
}catch ( Exception e) {
    println(e.message)
}

println(checking.balance)

checking.deposito([1.0,5.2,7.9,10.4,20.0])
println(checking.balance)
