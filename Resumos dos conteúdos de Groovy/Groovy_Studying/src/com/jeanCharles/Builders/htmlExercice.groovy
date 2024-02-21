package com.jeanCharles.Builders

import groovy.xml.MarkupBuilder

FileWriter writer = new FileWriter('html/exercise.html')
MarkupBuilder builder = new MarkupBuilder(writer)

List books = [
        [isbn: "978-1935182443", title: 'Groovy in Action 2nd Edition', author: 'Dierk Koenig', price: 50.58],
        [isbn: "978-1935182948", title: 'Making Java Groovy', author: 'Ken Kousen', price: 33.96],
        [isbn: "978-1937785307", title: 'Programming Groovy 2: Dynamic Productivity for the Java Developer', author: 'Venkat Subramaniam', price: 28.92]
]

builder.html {
    head {
        title 'Sobre os livros'
        description 'Está é uma pagina sobre livros'
        keywords 'Jean Charles, Groovy, Java, Html, Books'
    }
    body {
        h1 'Books'
        p 'este é um parágrafo fala sobre os diversos livros'
        section {
            h2 'Books'
            table  {
                tr {
                    th 'isbn'
                    th 'title'
                    th 'author'
                    th 'price'
                }
                books.each { book ->
                    tr {
                        td book.isbn
                        td book.title
                        td book.author
                        td book.price
                    }
                }
            }
        }
    }
}

