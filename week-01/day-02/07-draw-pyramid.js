'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let num = "";

for(let i = 1; i <= lineCount; i++)
{
    for(let j = 1; j<=lineCount+i-1; j++){
        
        if(i+j <= lineCount){
            num += " ";
        }else{
            num += "*";
        }
    }
    console.log(num);
    num = "";
}