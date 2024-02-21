package com.jeanCharles.POO

import groovy.transform.ToString

@ToString
class Person_Methods {

    String first, last

    //constructor

    Person_Methods(String fullName) {
        List parts = fullName.split(' ')
        first = parts[0]
        last = parts[1]
    }

    // metodos

    String getFullName() {
        "$first $last"
    }

    def bar() {

    }
    static String doGoodWork(){
        println("tenha um bom trabalho")
    }

    List someMethods(numbers = [1,2,3], Boolean canAccessAll = false) {

    }

    def concat(String...args) {
        println(args.length)
    }

}

//Person_Methods p = new Person_Methods(first: "Jean", last: "Charles")
//println(p)

//Person_Methods p = new Person_Methods("Jean Charles")
//println(p)

Person_Methods p = new Person_Methods("Jean Charles")
p.concat('a','b','c','d')