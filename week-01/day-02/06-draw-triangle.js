'use strict';

const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function drawTriangle(line){
    for(let i =1; i<=line; i++){
        console.log("*".repeat(i));
    }
}

drawTriangle(lineCount)