'use strict';

class Carrier{
    constructor(storage, hp){
        this.crafts = [];
        this.storage = storage;
        this.hp = hp;
    }

    add(craft){
        this.crafts.push(craft);
    }

    fill(){
        if(this.storage <= 0){
            throw 'Please restore storage before fill tha aircrafts!';
        }

        //fill F35
        this.crafts.forEach( craft => {
            if(craft.isPriority()){
                this.storage = craft.refill(this.storage);
                }
        }) 

        //fill the rest
        if(this.storage > 0){
            this.crafts.forEach( craft => {
                this.storage = craft.refill(this.storage);
            });
        }
    }

    totalDamage(){
        return this.crafts.reduce((e, craft) => {
            return craft.ammo * craft.baseDam + e;
        }, 0);
    }

    fight(carrier){
        let totalDamage = this.totalDamage();
        this.crafts.forEach(craft => {
            craft.ammo = 0;
        })
        carrier.hp -= Math.min(carrier.hp, totalDamage);
    }

    getStatus(){
        if(this.hp === 0){
            console.log("It's dead Jim:(");
            return;
        }
        console.log(`HP: ${this.hp}, Aircraft count: ${this.crafts.length}, Ammo Storage: ${this.storage},Total damage: ${this.totalDamage()}`);
        this.crafts.forEach( craft => {
            craft.getStatus();
        })
    }
}

module.exports = Carrier;