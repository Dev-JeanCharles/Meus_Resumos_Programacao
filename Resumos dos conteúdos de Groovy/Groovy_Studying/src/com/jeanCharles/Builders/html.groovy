package com.jeanCharles.Builders

import groovy.xml.MarkupBuilder

FileWriter writer = new FileWriter('html/about.html')
MarkupBuilder builder = new MarkupBuilder(writer)

List courses = [
        [id:1, name: 'Apache Groovy'],
        [id:2, name: 'Spring Boot']
]

builder.html {
    head {
        title 'Sobre o Jean Charles'
        description 'Está é uma pagina sobre mim'
        keywords 'Jean Charles, Groovy, Java, Spring'
    }
    body {
        h1 'sobre mim'
        p 'este é um parágrafo que fala sobre mim'
        section {
            h2 'Cursos'
            table  {
                tr {
                    th 'id'
                    th 'name'
                }
                courses.each { course ->
                    tr {
                        td course.id
                        td course.name
                    }
                }
            }
        }
    }
}
