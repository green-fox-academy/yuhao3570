'use strict';

class Plant {
    constructor(color, curWaterAmt, absorbLevel, threshold){
        this.color = color;
        this.curWaterAmt = curWaterAmt;
        this.absorbLevel = absorbLevel;
        this.threshold = threshold;
        this.needWater =  (this.curWaterAmt < threshold);
    }

    addWater(amount){
        this.curWaterAmt += this.absorbLevel * amount;
        this.needWater =  (this.curWaterAmt < this.threshold);
    }
}

module.exports = Plant;