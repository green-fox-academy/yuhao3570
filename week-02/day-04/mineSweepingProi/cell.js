class Cell{
    constructor(){
        this.value = '#';
        this.clickable = true;
        this.isMine = false;
        this.neighborMineNo = 0;
    }

    setMine(){
        this.isMine = true;
    }
}

module.exports = Cell;