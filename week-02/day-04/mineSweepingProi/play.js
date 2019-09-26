const Mines = require('./mines');



const mines = new Mines(10, 3);
mines.printBoard();
// console.log(mineBoard.convertRowIndexToNumber('A'));
console.log(Object.keys(mines.mineBoard).length);
mines.layMine();
console.log(mines.mineList);