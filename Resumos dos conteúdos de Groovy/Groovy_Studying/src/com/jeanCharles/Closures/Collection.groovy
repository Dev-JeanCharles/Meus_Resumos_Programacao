package com.jeanCharles.Closures

// Each e EachWithIndex

List favNums = [2,21,44,35,8,4]

for (num in favNums) {
    println(num)
}
favNums.each {println(it)}

for (int i= 0; i<favNums.size(); i++) {
    println("$i:${favNums[i]}")
}

favNums.eachWithIndex{ num, idx ->
    println("$idx:$num")
}

//findAll
List diasSemana = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta",  "Sexta", "Sabado"]
List semanas = diasSemana.findAll {it.startsWith("D")}

println(diasSemana)
println(semanas)
// Collect

List nums = [1,2,2,6,7,1,9,10,22,]

List numsTimesTen = []
nums.each {num ->
    numsTimesTen << num * 10
}

List newTimesTen = nums.collect {num -> num * 10}

println(nums)
println(numsTimesTen)
println(newTimesTen)