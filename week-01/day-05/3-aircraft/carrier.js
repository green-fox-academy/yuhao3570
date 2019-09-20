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

        let totalAmmoNeeded = this.crafts.reduce( (e, craft) => {
            return (craft.maxAmmo - craft.ammo) + e;
        }, 0)
        console.log('a', totalAmmoNeeded);
        if(this.storage >= totalAmmoNeeded){
            this.crafts.forEach( craft => {
                this.storage = craft.refill(this.storage);
            })

        } else {
            //fill F35 first
            this.crafts.forEach( craft => {
                if(craft.isPriority()){
                    craft.getStatus();
                    this.storage = craft.refill(this.storage);
                    // console.log("points: ");
                    craft.getStatus();
                }
            }) 

            //fill the rest
            if(this.storage > 0){
                this.crafts.forEach( craft => {
                    this.storage = craft.refill(this.storage);
                });
            }
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