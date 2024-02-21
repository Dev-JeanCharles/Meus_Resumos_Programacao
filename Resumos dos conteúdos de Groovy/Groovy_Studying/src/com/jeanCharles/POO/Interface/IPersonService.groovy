package com.jeanCharles.POO.Interface

import com.jeanCharles.POO.Person

interface IPersonService {

    Person find()

    List<Person> findAll()

}