package com.jeanCharles.Lists

List nums = [1,2,3,4,5,6,7,8,9]
println nums
println nums.class

// adicionar | remover | buscar | limpar

nums.push(99)
nums.putAt(1,77)
nums[1] = 78
println nums

// Outra forma de fazer sobrecarga
nums << 66
println nums

//Sobrecarga
println nums + [3,4,6]

// remover elemento da lista
nums.pop()
nums.removeAt(0)
def newList = nums - 3
println nums
println newList

// buscar elemento da lista
println nums[4]

//intervalo
println nums.getAt(0..4)

// Limpar uma lista
nums = []
nums.clear()

// Varrer a lista em um for
for (x in nums) {
    println x
}

// flatten and unique

nums << [3,4,5]
nums << [1,2]

println nums.flatten()

println nums.unique()

// Set and SortedSet
def numbers = [1,2,6,8,9,10,4,11,13,12,3,2,12,10] as Set
println numbers
println numbers.class.name
def numbers2 = [1,2,6,8,9,10,4,11,13,12,3,2,12,10] as SortedSet
println numbers2
println numbers2.class.name
