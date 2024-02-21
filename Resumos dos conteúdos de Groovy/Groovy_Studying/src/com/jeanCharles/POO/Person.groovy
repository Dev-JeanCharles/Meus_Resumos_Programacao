package com.jeanCharles.POO

import groovy.transform.ToString

@ToString
class Person {

    String firstName, lastName
    def dob
    // private | protected | public
    protected String f1,f2,f3
    private Date createOn = new Date()

    static welcomeMsg = 'HELLO'
    public static final String WELCOME_MSG = 'HELLO'

    // Variaveis Locais
    def foo () {
        String msg = 'Hello'
        String firstName = "Jean"
        println("$msg, $firstName")
    }
}
