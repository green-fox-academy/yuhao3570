'use strict'

// control flow
let condition = true;

if (condition){
    console.log("hello!");

} else {
    console.log("Not hello!")
}

for (let i = 1; i < 5; i++){
    console.log("hello")
}

let key = 100;
while(key >10){
    key -= 10;
    console.log("hello");
}

let fruits = ["banana", "apple", "pear", "kiwi"];

for(let i = 0; i<fruits.length; i++){
    if (fruits[i] == "banana"){
        console.log("Found banana at ", i)
        break;
    }
}


// function

function myFunction(){
    console.log("first func");
}

function greet(name){
    console.log(`hello ${name}`);
}

// function as variable
let otherGreet = function(name){
    console.log(`hello ${name}`);
}

fruits.forEach(greet)

fruits.map(function(fruit){
    return fruit += "!"
}).forEach(greet)

