const Item = require('./Item');

class Tool extends Item {
    constructor(name, price) {
        super(name, price);
        this.condition = 'good';
    }

    print() {
        return `${this.condition} ${super.print()}`
    }
}

module.exports = Tool;