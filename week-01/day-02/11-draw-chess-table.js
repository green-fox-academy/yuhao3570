'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
const lineCount = 6;

for (let i = 0; i < lineCount; i++){
    if (i%2 === 0){
        console.log(" % % % %");
    }else{
        console.log("  % % % %");
    }
}