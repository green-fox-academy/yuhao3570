'use strict';

/*
Create Sharpie class
    We should know about each sharpie their 
        color (which should be a string), 
        width (which will be a floating point number), 
        inkAmount (another floating point number)
    When creating one, we need to specify the color and the width
    Every sharpie is created with a default 100 as inkAmount
    We can use() the sharpie objects, which decreases inkAmount
*/

class Sharpie{
    constructor(color, width, inkAmount = 100){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use(){
        this.inkAmount -= 1.5;
    }
}

let test = new Sharpie('black', 10.5);
console.log(test);
test.use();
console.log(test);

module.exports = Sharpie;