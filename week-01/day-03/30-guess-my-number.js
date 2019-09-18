'use strict';

// Write a program where the program chooses a number between 1 and 100. The player is 
// then asked to enter a guess. If the player guesses wrong, 
// then the program gives feedback and ask to enter an other guess until the guess is correct.

// Make the range customizable (ask for it before starting the guessing).
// You can add lives. (optional)

let range = window.prompt('Please enter a number between 1 to 100 for setting the range: ');

let number = Math.floor(Math.random() * range)

let guess;

while(true){
    guess = window.prompt("Please guess a number: ");
    if(guess > number){
        console.log("too big!");
    }else if(guess < number){
        console.log,log("too small!");
    }else{
        console.log("You got it!!!");
        break;
    }
}