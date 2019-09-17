'use strict';

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

let al ="EPAM";

function greet(name="Nobady"){
    console.log(`Greetings, dear ${name}`)
}

greet(al)
greet()