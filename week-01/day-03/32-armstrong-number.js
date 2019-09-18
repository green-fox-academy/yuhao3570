'use strict';

// Write a simple program to check if a given number is an armstrong number. 
// The program should ask for a number. E.g. if we type 371, 
// the program should print out: The 371 is an Armstrong number.

function checkArmstrong(number){
    let digits = number.toString().split('');
    let power = digits.length;

    let sum = 0;
    for (let e of digits){
        sum += Math.pow(Number(e), power);
    }

    if(sum===number){
        console.log(`The ${number} is an Armstrong number`);
    }else{
        console.log(`The ${number} is not an Armstrong number`);
    }
}

checkArmstrong(153);
checkArmstrong(371);
checkArmstrong(123);

