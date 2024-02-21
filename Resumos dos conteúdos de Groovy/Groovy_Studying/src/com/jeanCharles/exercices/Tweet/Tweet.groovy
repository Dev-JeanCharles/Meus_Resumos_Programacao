package com.jeanCharles.exercices.Tweet

import groovy.transform.ToString

@ToString()
class Tweet {

    String userName, message
    Integer retweets, favorites
    Date createdOn


    Tweet(String user, String tweet) {
        userName = user
        message = tweet
        retweets = 0
        favorites = 0
        createdOn = new Date()
    }

    void addToRetweets() {
        retweets += 1
    }

    void addToFavorites() {
        favorites += 1
    }

}
