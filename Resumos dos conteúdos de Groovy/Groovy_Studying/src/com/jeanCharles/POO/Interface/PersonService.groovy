package com.jeanCharles.POO.Interface

import com.jeanCharles.POO.Person

class PersonService implements IPersonService{
    @Override
    Person find() {
        Person p = new Person(firstName: "Jean", lastName: "Charles")
        return p
    }

    @Override
    List<Person> findAll() {
        Person p1 = new Person(firstName: "Jean", lastName: "Charles")
        Person p2 = new Person(firstName: "João", lastName: "Santos")
        [p1,p2]
    }
}
