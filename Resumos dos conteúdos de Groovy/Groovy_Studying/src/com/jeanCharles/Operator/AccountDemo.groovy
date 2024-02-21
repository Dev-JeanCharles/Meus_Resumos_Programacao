package com.jeanCharles.Operator

import groovy.transform.ToString

@ToString
class Account2 {

    BigDecimal balance = 0.0
    String type

    BigDecimal deposit(BigDecimal amount) {
        balance += amount
    }
    BigDecimal withdraw(BigDecimal amount) {
        balance -=amount
    }
    BigDecimal plus(Account2 account2) {
        this.balance + account2.balance
    }
}

Account2 checking = new Account2(type:"Checking")

checking.deposit(100.00)

Account2 savings = new Account2(type:"Savings")

savings.deposit(50.00)

println checking
println savings

BigDecimal total = checking + savings
println total

