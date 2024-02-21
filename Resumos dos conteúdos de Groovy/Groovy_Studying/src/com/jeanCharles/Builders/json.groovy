package com.jeanCharles.Builders

import groovy.json.JsonBuilder

JsonBuilder builder = new JsonBuilder()

builder.books {

    book {
        title 'The 4 Hour Work Week'
        isbn '978-1935182443'
        author (first: 'Timothy', last: 'Ferriss', twitter: '@tferriss')
        related 'The 4 Hour Body', 'The 4 Hour Chef'
    }
}
println(builder.toString())
println(builder.toPrettyString())

new File('json/books.json').write(builder.toPrettyString())

