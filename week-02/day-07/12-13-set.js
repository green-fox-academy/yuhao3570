class Data {
    constructor(length = 0) {
        this.length = length;
        this.array = new Array(this.length);
    }

    add(value) {
        for (let item of this.array) {
            if (value === item) {
                return this;
            }
        }

        this.array.push(value);
        return this;
    }

    read() {
        for (let item of this.array) {
            console.log(item);
        }
    }

    removeIntersect(set2) {
        let result = [];
        for (let item of this.array) {
            if (!set2.array.includes(item)) {
                result.push(item);
            }
        }

        for (let item of set2.array) {
            if (!this.array.includes(item)) {
                result.push(item);
            }
        }
        return result;
    }
}

const set = new Data();
const set2 = new Data();

set.add(10).add(20).add(10).add(30).add(15);
set2.add(10).add(200).add(10).add(30).add(15).add(35);

// set.read();

console.log(set.removeIntersect(set2));