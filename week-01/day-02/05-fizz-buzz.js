'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzbuzz(start, end){
    for (let i = start; i< end; i++){
        if (i%3 === 0){
            if(i%5 === 0){
                console.log("FizzBuzz");
            }
            else{
                console.log("Fizz")
            }
        }
        else if(i%5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

fizzbuzz(1, 100);