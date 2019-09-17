'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(end){
    let sum =0;
    if (end > 0){
        for(let i=1; i<=end; i++){
            sum += i;
        }
    }
    return sum;
}

console.log(sum(3));