'use strict';

class Person{
    constructor(name = 'unknown', age = -12){
        this.name = name;
        this.age = age;
    }

    greet(person){
        console.log(`${this.name} says 'Hello my friend, dear ${person.name}'`);
    }
}

let adam = new Person('adam', 28);
console.log(adam);
let hao = new Person('hao', 20);
console.log(hao)
hao.greet(adam);

adam.age ++;
console.log(adam);


