'use strict';

const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++){
    let num = ""
    if(i===0 || i===lineCount-1){
        num="%".repeat(lineCount);
    }
    else
    {
        num = "%" + " ".repeat(i-1) + "%" + " ".repeat(lineCount-2-i) + "%";
    }
    console.log(num);
}