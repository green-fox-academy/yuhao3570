const Mines = require('./mines');
const readline = require('readline');

const read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// read1.setPrompt('$MineGame>');

// let over = false;


// const mines = mineBoardPrompt();

// mines.printBoard();
// // console.log(mineBoard.convertRowIndexToNumber('A'));
// console.log(Object.keys(mines.mineBoard).length);
// mines.layMine();
// console.log(mines.mineList);

// while(!over){

// }

mineBoardPrompt();

async function mineBoardPrompt() {
    let size = 0;
    let mineNum = 0;
    while (size <= 0 || size >= 100) {
        size = parseInt(await readLineAsync("How big the gameplay should be (n)?"));
    }

    while (mineNum <= 0 || mineNum > size) {
        mineNum = parseInt(await readLineAsync("How many mines you'd like to find (k)?"))
    }

    console.log("Game Starts Now!");

    const mines = new Mines(size, mineNum);

    mines.printBoard();
    // console.log(mineBoard.convertRowIndexToNumber('A'));
    console.log(Object.keys(mines.mineBoard).length);
    mines.layMine();
    console.log(mines.mineList);

    read1.close();

}



function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        read1.question(message, (answer) => {
            resolve(answer);
        });
    });
}