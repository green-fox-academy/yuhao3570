'use strict';

// Write a program that prints apple after 3 seconds.

const apple = (interval) => {
    let counter = 0;
    interval = setInterval(()=>{
        console.log('Apple');
        counter++;
        if(counter === 4){
            clearInterval(interval)
        }
    }, 3000)
}

apple();