class Cell{
    constructor(){
        this.value = '#';
        this.clickable = true;
        this.isMine = false;
    }

    setMine(){
        this.isMine = true;
    }
}

module.exports = Cell;