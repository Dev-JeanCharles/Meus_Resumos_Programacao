package com.jeanCharles.Closures

def log = {String type, Date created0n, String msg ->
    println("$created0n [$type] - $msg" )
}

log("DEBUG", new Date(), "Este é o meu primeiro debug...")

def debugLog = log.curry("DEBUG")
debugLog(new Date(), "Este é outro debug que criei...")
debugLog(new Date(), "Este é mais um debug que criei...")

def todayDebugLog = log.curry("DEBUG", new Date())
todayDebugLog("Este debug recebeu uma nova mensagem de dia")

// Right curry
def crazyPersonLog = log.rcurry("Meu log foi substituido da direita para esquerda")
crazyPersonLog("ERROR", new Date())

// index based currying
def typeMsgLog = log.ncurry(1, new Date())
typeMsgLog("ERROR", "Estou usando ncurry")


