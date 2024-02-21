package com.jeanCharles.exercices.Tweet

def tweet = new Tweet("Jean", "Hello, there!")
tweet.addToFavorites()
println tweet

def tweet2 = new Tweet("Clarice", "Hello, there, my name is Clarice!")
tweet2.addToFavorites()
tweet2.addToRetweets()
println tweet2
