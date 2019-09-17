'use strict';

const lineCount = 7;
// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let mid = Math.ceil(lineCount/2);
console.log(mid);
let num ="";

//print upper half
for (let i = 1; i<=mid; i++){
    for(let j = 1; j<=mid+i-1; j++){
        
        if(i+j <= mid){
            num += " ";
        }else{
            num += "*";
        }
    }
    console.log(num);
    num = "";
}

//print lower half
let rest = lineCount - mid;
for(let i = rest; i >=1; i--){
    for (let j = 0 ; j<rest + i; j++){

        if(j <= rest-i){
            num += " ";
        }else{
            num += "*";
        }
    }
    console.log(num);
    num = "";
}