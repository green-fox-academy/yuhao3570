'use strict';

const Fleet = require('./fleet');
/*
Reuse your Sharpie class
Create SharpieSet class
    it contains a list of Sharpie
    countUsable() -> sharpie is usable if it has ink in it
    removeTrash() -> removes all unusable sharpies
*/
const Sharpie = require('./05-sharpie');

class SharpieSet{
    constructor() {
        this.sharpies = [];
    }

    usable(sharpie){
        return sharpie.inkAmount > 0;
    }

    countUsable(){
        return this.sharpies.filter(this.usable).length;
    }

    removeTrash(){
        this.sharpies = this.sharpies.filter(this.usable);
    }
}

let sharpieSet = new SharpieSet();
sharpieSet.sharpies.push(new Sharpie('black', 1, 0));
sharpieSet.sharpies.push(new Sharpie('black', 2, 10));
sharpieSet.sharpies.push(new Sharpie('black', 3, 0));
sharpieSet.sharpies.push(new Sharpie('black', 4, 100));
sharpieSet.sharpies.push(new Sharpie('black', 5, 10));
sharpieSet.sharpies.push(new Sharpie('black', 6, 7));

console.log(sharpieSet);
console.log(sharpieSet.countUsable());
sharpieSet.removeTrash();
console.log(sharpieSet);