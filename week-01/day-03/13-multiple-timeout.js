'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let interval = (timeInterval, word) => {
    setTimeout(()=>{
        console.log(word);
    }, timeInterval)
}

let multi = (callback) => {
    interval(0, "Apple");
    interval(1000, "pear");
    interval(3000, "melon");
    interval(5000, 'grapes');
}

multi()