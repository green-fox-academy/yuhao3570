'use strict';

/*
Create an Animal class
    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    when creating a new animal object these values are created with the default 50 value
    
    Every animal can eat() which decreases their hunger by one
    Every animal can drink() which decreases their thirst by one
    Every animal can play() which increases both by one
*/

class Animal{
    constructor(hunger = 50, thirst = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(){
        this.hunger--;
    }
    drink(){
        this.thirst--;
    }
    play(){
        this.hunger++;
        this.thirst++;
    }
}

let test = new Animal();

console.log(test);
test.drink();
test.eat();
console.log(test);

test.play();
console.log(test);

module.exports = Animal;