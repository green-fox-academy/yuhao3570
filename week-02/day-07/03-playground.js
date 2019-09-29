const Garden = require('./02-Garden-class');

class PlayGround extends Garden{
    constructor(width, length, toys){
        super(width, length);
        this.toys = toys;
    }

    add(toy){
        this.toys.push(toy);
    }
}

let play = new PlayGround(10, 4, ['a', 'b', 'c']);

console.log(play.area());
console.log(play.circumference());
console.log(play.efficiency());
play.add('d');

console.log(play.toys);