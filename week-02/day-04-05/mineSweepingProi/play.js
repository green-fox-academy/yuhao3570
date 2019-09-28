const Mines = require('./mines');
const readline = require('readline');

const read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mineBoardPrompt();

async function mineBoardPrompt() {
    let size = 0, mineNum = 0;

    while (size <= 0 || size >= 100) {
        size = parseInt(await readLineAsync("How big the gameplay should be (n)?\n> "));
    }

    while (mineNum <= 0 || mineNum > size * size / 2) {
        mineNum = parseInt(await readLineAsync("How many mines you'd like to find (k)?\n > "))
    }

    console.log("Game Starts Now!");

    const mines = new Mines(size, mineNum);

    mines.printBoard();

    // console.log(Object.keys(mines.mineBoard).length);
    // console.log(mines.mineList);


    while(!mines.over){
        
    }



    read1.close();

}



function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        read1.question(message, (answer) => {
            resolve(answer);
        });
    });
}