const Item = require('./Item');

class Toy extends Item {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }

    print() {
        return `${this.color} ${super.print()}`;
    }
}

module.exports = Toy;