package com.jeanCharles.Beans

import groovy.transform.ToString

@ToString
class Employee implements Serializable{

    String first,last,email

    String fullName

    void setFullName(String name) {
        fullName = name
    }

    String getFullName() {
        "Nome completo: ${fullName}"
    }


}
