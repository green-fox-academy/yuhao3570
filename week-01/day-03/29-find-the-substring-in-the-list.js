'use strict';

//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

function subStrList(word, wordList){
    let loc = -1;
    for (let e of wordList){
        if (e.includes(word)){
            loc = wordList.indexOf(e);
        }
    }
    return loc;
}

//  Example
console.log(subStrList('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(subStrList('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

module.exports = subStrList;


