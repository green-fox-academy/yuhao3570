'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(num){
    for (let i = num-1; i>0; i--){
        num*=i;
    }
    return num;
}

console.log(factorio(1));