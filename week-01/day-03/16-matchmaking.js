'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

console.log(makingMatches(girls, boys));

module.exports = makingMatches;

function makingMatches(girls, boys){
    let result = [];
    let cur = 0;
    if(girls.length >= boys.length){
        for(; cur < boys.length; cur++){
            result.push(girls[cur]);
            result.push(boys[cur]);
        }
        if(girls.length > cur){
            result.push(...girls.slice(cur));
        }
    }
    else{
        for(;cur < girls.length; cur++){
            result.push(girls[cur]);
            result.push(boys[cur]);
        }
        result.push(...boys.slice(cur));
    }
    return result;

}