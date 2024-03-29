'use strict';

/*
Create a Counter class
    which has an integer property
    when creating it should have a default value 0 or we can specify it when creating
    we can add(number) to increase the counter's value by a whole number
    or we can add() without parameters just increasing the counter's value by one
    and we can get() the current value as string
    also we can reset() the value to the initial value
*/

class Counter{
    constructor(num = 0){
        this.origin = this.num = num
    }
    add(number){
        this.num += number
    }

    add(){
        this.num++;
    }
    get(){
        return this.num.toString();
    }
    reset(){
        return this.origin;
    }
}

let test = new Counter(100);
console.log(test);

test.add(10);
console.log(test);
test.add();
console.log(test);
console.log(test.reset());