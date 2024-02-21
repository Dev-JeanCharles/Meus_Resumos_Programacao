package com.jeanCharles.Ranges

import org.w3c.dom.ranges.Range

// Exemplo de um for para varrer os elementos de uma lista
//def letras = ['a', 'b', 'c']
//for (i = 0; i < letras.size(); i++) {
//    print letras[i]
//}

// Trabalhando com ranges
println ""
IntRange r = (1..<10)
println r
println r.class.name
println r.from
println r.to

assert (0..10).contains(0)
assert (0..10).contains(10)
assert (0..10).contains(-1) == false
assert (0..10).contains(11) == false

assert (0..<10).contains(0)
assert (0..<10).contains(10) == false

Date today = new Date()
Date oneWeekAway = new Date(today.time + 7 * 24 * 60 * 60 * 1000)

List<Date> days = []
def current = today
while (current <= oneWeekAway) {
    days.add(current)
    current = new Date(current.time + 24 * 60 * 60 * 1000)
}
println(days)
