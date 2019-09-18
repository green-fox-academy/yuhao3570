'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far));
module.exports = appendA;

function appendA(far){
    far.forEach((word, index) =>{
        far[index] = word + 'a';
    });
    return far;
}