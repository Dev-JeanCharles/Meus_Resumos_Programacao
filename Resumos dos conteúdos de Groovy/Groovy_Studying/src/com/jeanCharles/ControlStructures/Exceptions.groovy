package com.jeanCharles.ControlStructures

// Exceptions

def foo () {
    throw new Exception("Foo exception")
}

List log = []

try {
    foo()
} catch (Exception e) {
    log << e.message
} finally {
    log << 'finally'
}

println(log)
