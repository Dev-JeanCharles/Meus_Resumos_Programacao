package com.jeanCharles.exercices.Tweet.ControlStructures

class Account {

    BigDecimal balance = 0.0

def deposito (BigDecimal value) {
    if (value < 0) {
        throw new Exception("O valor tem que ser maior que zero")
    }
    balance += value
    }
    def deposito(List values) {
        for (value in values) {
            deposito(value)
        }
    }
}
