'use strict';

// callback
const foo = function(greet){
    greet("hello");
    greet("Epamers;")
}

const foo2 = callback => {
    callback("hello");
}

function greet(word){
    console.log(word);
}



// foo2(greet);

// setInterval
let counter = 0;
const timer = (interval) =>{
    interval = setInterval(()=>{
        console.log("Jello");
        counter++;
        if(counter===5){
            clearInterval(interval);
        }
    }, 1000)
}

timer();