const Mines = require('./mines');
const readline = require('readline');

// const read = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

<<<<<<< HEAD
// mineBoardPrompt();
=======
mineBoardPrompt();
>>>>>>> 09611a4338431cf78a7e64f5d46ff805cb2cc527

async function mineBoardPrompt() {
    let size = 0, mineNum = 0;

    while (size <= 0 || size >= 100) {
        size = parseInt(await readLineAsync("How big the gameplay should be (n)?\n> "));
    }

    while (mineNum <= 0 || mineNum > size * size / 2) {
<<<<<<< HEAD
        mineNum = parseInt(await readLineAsync("How many mines you'd like to find (k)?\n> "))
=======
        mineNum = parseInt(await readLineAsync("How many mines you'd like to find (k)?\n > "))
>>>>>>> 09611a4338431cf78a7e64f5d46ff805cb2cc527
    }

    console.log("----- Game Starts Now!-----");

    const mines = new Mines(size, mineNum);
    mines.printBoard();
<<<<<<< HEAD
    // console.log(Object.keys(mines.mineBoard).length);
    console.log(mines.mineList);
=======

    // console.log(Object.keys(mines.mineBoard).length);
    // console.log(mines.mineList);


    while(!mines.over){
        
    }


>>>>>>> 09611a4338431cf78a7e64f5d46ff805cb2cc527

    let reveal;
    while(!mines.over){
        reveal = await readLineAsync("Please select which field to reveal (row-col)\n>  ");

        if(mines.isCellMined(reveal)){
            mines.loss();
        };
    }
    read.close();
}

function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        read.question(message, (answer) => {
            resolve(answer);
        });
    });
}


// test
let mines = new Mines(10, 5);
mines.printBoard();
console.log(mines.mineList);