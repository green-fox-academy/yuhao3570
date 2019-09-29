'use strict';
const Cell = require('./cell');

class Mines {
    constructor(width, mineNumber) {
        this.width = width;
        this.mineNumber = mineNumber;
        this.over = false;

        this.mineBoard = this.createBoard();
        this.mineList = new Set();
        this.layMine();
    }

    createBoard() {
        if (this.width <= 0) {
            return;
        }

        const gameBoard = {};
        gameBoard['~'] = new Map([...Array(this.width)].map((_, i) => [i, ++i]));

        let currentRow;
        for (let i = 0; i < this.width; i++) {
            if (i < 26) {
                currentRow = String.fromCharCode(65 + i);
            } else {
                currentRow = Object.keys(gameBoard)[i % 26 + 1] + String.fromCharCode(65 + i % 26).repeat(Math.floor(i / 26));
            }
            gameBoard[currentRow] = new Map([...Array(this.width)].map((_, index) => [index + 1, new Cell()]));
        }
        return gameBoard;
    }

    layMine() {
        let row, col;
        while (this.mineList.size < this.mineNumber) {
            row = Object.keys(this.mineBoard)[Math.floor(Math.random() * (this.width - 1)) + 1];
            col = Math.floor(Math.random() * (this.width - 1)) + 1;

            while (this.mineList.size < this.mineNumber) {
                row = Object.keys(this.mineBoard)[Math.floor(Math.random() * (this.width - 1)) + 1];
                col = Math.floor(Math.random() * (this.width - 1)) + 1;
                this.mineBoard[row].get(col).setMine();
                this.mineList.add(row + '-' + col);
            }
        }
    }

    getCell(index) {
        let postion = index.trim().split('-');
        return this.mineBoard[postion[0]].get(postion[1]);
    }

    isMined(index) {
        return this.getCell(index).isMine;
    }

    lose() {
        this.over = true;
        console.log('Game Over');
    }

    printBoard() {
        let toPrint = '';

        for (let row of Object.keys(this.mineBoard)) {
            if (row.length > 1) {
                toPrint = row + ' '.repeat(3 - (row.length - 1));
            } else {
                toPrint = row + ' '.repeat(3);
            }

            for (let col of this.mineBoard[row].entries()) {
                if ((row !== '~')) {
                    toPrint += ' '.repeat(2) + col[1].value;
                } else if (col[1] >= 10) {
                    toPrint += ' '.repeat(1) + col[1];
                } else {
                    toPrint += ' '.repeat(2) + col[1];
                }
            }
            console.log(toPrint);
        }
    }

    isCellMined(index) {
        return this.mineList.has(index.trim());
    }

    getCell(index) {
        pos = index.trim().split('-');
        return this.mineBoard[pos[0]].get(pos[1]);
    }

    loss(index) {
        console.log(`${index} is Mined, Game Over`);
        this.over = true;
    }

    clacNeighborPos(index) {
        let pos = index.trim().split('-');;
        let neighbors = [];


    }

    convertRowIndexToNumber(row) {
        let num = 0;
        if (row.length === 1) {
            num = row.charCodeAt(0) - 64;
        } else {
            num = (row.charCodeAt(row.length - 1) - 64) + 26 * (row.length - 1);
        }
        return num;
    }
}

module.exports = Mines;