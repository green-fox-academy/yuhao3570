'use strict';

class Aircraft{
    constructor(type){
        this.type = type;
        this.ammo = 0;
        this.baseDam = (this.type === 'F16') ? 30 : 50;
        this.maxAmmo = (this.type === 'F16') ? 8 : 12;
    }

    fight(){
        let damageDealt = this.ammo * this.baseDam;
        this.ammo = 0;
        return damageDealt;
    }

    refill(amount){
        if(this.ammo < this.maxAmmo){
            let temp = this.ammo;
            this.ammo = (amount > this.maxAmmo) ? this.maxAmmo : amount;
            return amount - (this.ammo -temp);
        }else{
            return amount;
        }  
    }

    getType(){
        return this.type;
    }

    getStatus(){
        console.log(`Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDam}, All Damage: ${this.ammo * this.baseDam}`);
    }

    isPriority(){
        return this.type === 'F35';
    }
}

module.exports = Aircraft;